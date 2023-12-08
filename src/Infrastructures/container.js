/* istanbul ignore file */

const { createContainer } = require('instances-container');

// external agency
const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const Jwt = require('@hapi/jwt');
const pool = require('./database/postgres/pool');

// service (repository, helper, manager, etc)
const UserRepository = require('../Domains/users/UserRepository');
const OxygenRepository = require('../Domains/oxygens/OxygenRepository');
const GardenRepository = require('../Domains/gardens/GardenRepository');
const PlantRepository = require('../Domains/plants/PlantRepository');
const ReminderRepository = require('../Domains/reminders/ReminderRepository');
const RoleRepository = require('../Domains/roles/RoleRepository');
const MarketplaceItemRepository = require('../Domains/marketplaceItems/MarketplaceItemRepository');
const PasswordHash = require('../Applications/security/PasswordHash');
const UserRepositoryPostgres = require('./repository/UserRepositoryPostgres');
const OxygenRepositoryPostgres = require('./repository/OxygenRepositoryPostgres');
const BcryptPasswordHash = require('./security/BcryptPasswordHash');
const GardenRepositoryPostgres = require('./repository/GardenRepositoryPostgres');
const PlantRepositoryPostgres = require('./repository/PlantRepositoryPostgres');
const ReminderRepositoryPostgres = require('./repository/ReminderRepositoryPostgres');
const RoleRepositoryPostgres = require('./repository/RoleRepositoryPostgres');
const MarketplaceItemRepositoryPostgres = require('./repository/MarketplaceItemRepositoryPostgres');

// use case
const AddUserUseCase = require('../Applications/use_case/AddUserUseCase');
const AuthenticationTokenManager = require('../Applications/security/AuthenticationTokenManager');
const JwtTokenManager = require('./security/JwtTokenManager');
const LoginUserUseCase = require('../Applications/use_case/LoginUserUseCase');
const AuthenticationRepository = require('../Domains/authentications/AuthenticationRepository');
const AuthenticationRepositoryPostgres = require('./repository/AuthenticationRepositoryPostgres');
const LogoutUserUseCase = require('../Applications/use_case/LogoutUserUseCase');
const RefreshAuthenticationUseCase = require('../Applications/use_case/RefreshAuthenticationUseCase');

// Garden use case
const AddGardenUseCase = require('../Applications/use_case/AddGardenUseCase');
const GetGardensUseCase = require('../Applications/use_case/GetGardensUseCase');
const GetGardenByIdUseCase = require('../Applications/use_case/GetGardenByIdUseCase');
const DeleteGardenByIdUseCase = require('../Applications/use_case/DeleteGardenByIdUseCase');

// Plant use case
const AddPlantUseCase = require('../Applications/use_case/AddPlantUseCase');
const GetPlantsByGardenIdUseCase = require('../Applications/use_case/GetPlantsByGardenIdUseCase');
const GetPlantByIdUseCase = require('../Applications/use_case/GetPlantByIdUseCase');
const DeletePlantByIdUseCase = require('../Applications/use_case/DeletePlantByIdUseCase');

// Reminder use case
const AddReminderUseCase = require('../Applications/use_case/AddReminderUseCase');
const GetRemindersByGardenIdUseCase = require('../Applications/use_case/GetRemindersByGardenIdUseCase');
const GetReminderByIdUseCase = require('../Applications/use_case/GetReminderByIdUseCase');
const EditReminderUseCase = require('../Applications/use_case/EditReminderUseCase');
const DeleteReminderByIdUseCase = require('../Applications/use_case/DeleteReminderByIdUseCase');

// Marketplace use case
// Admin
const AddMarketplaceItemUseCase = require('../Applications/use_case/AddMarketplaceItemUseCase');

// creating container
const container = createContainer();

// registering services and repository
container.register([
  {
    key: UserRepository.name,
    Class: UserRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
        {
          concrete: nanoid,
        },
      ],
    },
  },
  {
    key: AuthenticationRepository.name,
    Class: AuthenticationRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
      ],
    },
  },
  {
    key: PasswordHash.name,
    Class: BcryptPasswordHash,
    parameter: {
      dependencies: [
        {
          concrete: bcrypt,
        },
      ],
    },
  },
  {
    key: AuthenticationTokenManager.name,
    Class: JwtTokenManager,
    parameter: {
      dependencies: [
        {
          concrete: Jwt.token,
        },
      ],
    },
  },
  {
    key: OxygenRepository.name,
    Class: OxygenRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
        {
          concrete: nanoid,
        },
      ],
    },
  },
  {
    key: GardenRepository.name,
    Class: GardenRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
        {
          concrete: nanoid,
        },
      ],
    },
  },
  {
    key: PlantRepository.name,
    Class: PlantRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
        {
          concrete: nanoid,
        },
      ],
    },
  },
  {
    key: ReminderRepository.name,
    Class: ReminderRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
        {
          concrete: nanoid,
        },
      ],
    },
  },
  {
    key: RoleRepository.name,
    Class: RoleRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
        {
          concrete: nanoid,
        },
      ],
    },
  },
  {
    key: MarketplaceItemRepository.name,
    Class: MarketplaceItemRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
        {
          concrete: nanoid,
        },
      ],
    },
  },
]);

// registering use cases
container.register([
  // Authentication use case
  {
    key: AddUserUseCase.name,
    Class: AddUserUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
        {
          name: 'oxygenRepository',
          internal: OxygenRepository.name,
        },
        {
          name: 'passwordHash',
          internal: PasswordHash.name,
        },
      ],
    },
  },
  {
    key: LoginUserUseCase.name,
    Class: LoginUserUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
        {
          name: 'authenticationRepository',
          internal: AuthenticationRepository.name,
        },
        {
          name: 'authenticationTokenManager',
          internal: AuthenticationTokenManager.name,
        },
        {
          name: 'passwordHash',
          internal: PasswordHash.name,
        },
      ],
    },
  },
  {
    key: LogoutUserUseCase.name,
    Class: LogoutUserUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'authenticationRepository',
          internal: AuthenticationRepository.name,
        },
      ],
    },
  },
  {
    key: RefreshAuthenticationUseCase.name,
    Class: RefreshAuthenticationUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'authenticationRepository',
          internal: AuthenticationRepository.name,
        },
        {
          name: 'authenticationTokenManager',
          internal: AuthenticationTokenManager.name,
        },
      ],
    },
  },

  // Garden use case
  {
    key: AddGardenUseCase.name,
    Class: AddGardenUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'gardenRepository',
          internal: GardenRepository.name,
        },
      ],
    },
  },
  {
    key: GetGardensUseCase.name,
    Class: GetGardensUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'gardenRepository',
          internal: GardenRepository.name,
        },
      ],
    },
  },
  {
    key: GetGardenByIdUseCase.name,
    Class: GetGardenByIdUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'gardenRepository',
          internal: GardenRepository.name,
        },
      ],
    },
  },
  {
    key: DeleteGardenByIdUseCase.name,
    Class: DeleteGardenByIdUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'gardenRepository',
          internal: GardenRepository.name,
        },
      ],
    },
  },

  // Plant use case
  {
    key: AddPlantUseCase.name,
    Class: AddPlantUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'gardenRepository',
          internal: GardenRepository.name,
        },
        {
          name: 'plantRepository',
          internal: PlantRepository.name,
        },
      ],
    },
  },
  {
    key: GetPlantsByGardenIdUseCase.name,
    Class: GetPlantsByGardenIdUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'gardenRepository',
          internal: GardenRepository.name,
        },
        {
          name: 'plantRepository',
          internal: PlantRepository.name,
        },
      ],
    },
  },
  {
    key: GetPlantByIdUseCase.name,
    Class: GetPlantByIdUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'gardenRepository',
          internal: GardenRepository.name,
        },
        {
          name: 'plantRepository',
          internal: PlantRepository.name,
        },
      ],
    },
  },
  {
    key: DeletePlantByIdUseCase.name,
    Class: DeletePlantByIdUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'gardenRepository',
          internal: GardenRepository.name,
        },
        {
          name: 'plantRepository',
          internal: PlantRepository.name,
        },
      ],
    },
  },

  // Reminder use case
  {
    key: AddReminderUseCase.name,
    Class: AddReminderUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'gardenRepository',
          internal: GardenRepository.name,
        },
        {
          name: 'reminderRepository',
          internal: ReminderRepository.name,
        },
      ],
    },
  },
  {
    key: GetRemindersByGardenIdUseCase.name,
    Class: GetRemindersByGardenIdUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'gardenRepository',
          internal: GardenRepository.name,
        },
        {
          name: 'reminderRepository',
          internal: ReminderRepository.name,
        },
      ],
    },
  },
  {
    key: GetReminderByIdUseCase.name,
    Class: GetReminderByIdUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'gardenRepository',
          internal: GardenRepository.name,
        },
        {
          name: 'reminderRepository',
          internal: ReminderRepository.name,
        },
      ],
    },
  },
  {
    key: EditReminderUseCase.name,
    Class: EditReminderUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'gardenRepository',
          internal: GardenRepository.name,
        },
        {
          name: 'reminderRepository',
          internal: ReminderRepository.name,
        },
      ],
    },
  },
  {
    key: DeleteReminderByIdUseCase.name,
    Class: DeleteReminderByIdUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'gardenRepository',
          internal: GardenRepository.name,
        },
        {
          name: 'reminderRepository',
          internal: ReminderRepository.name,
        },
      ],
    },
  },
  {
    key: AddMarketplaceItemUseCase.name,
    Class: AddMarketplaceItemUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'roleRepository',
          internal: RoleRepository.name,
        },
        {
          name: 'marketplaceItemRepository',
          internal: MarketplaceItemRepository.name,
        },
      ],
    },
  },
]);

module.exports = container;
