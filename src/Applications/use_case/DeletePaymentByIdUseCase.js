class DeletePaymentByIdUseCase {
  constructor({ paymentRepository, roleRepository }) {
    this._paymentRepository = paymentRepository;
    this._roleRepository = roleRepository;
  }

  async execute(payload) {
    const { user_id, id } = payload;
    await this._roleRepository.checkIfUserIsAdmin(user_id);
    return this._paymentRepository.deletePaymentById(id);
  }
}

module.exports = DeletePaymentByIdUseCase;
