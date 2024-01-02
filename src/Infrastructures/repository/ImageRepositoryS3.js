class ImageRepositoryS3 {
  constructor(s3Client, idGenerator, bucketName) {
    this._s3Client = s3Client;
    this._idGenerator = idGenerator;
    this._bucketName = bucketName;
  }

  async uploadImage(image, prefixId) {
    const id = `${prefixId}-${this._idGenerator()}`;

    const parameter = {
      Bucket: this._bucketName,
      Key: 'rpl/'.concat(id),
      Body: image.buffer,
      ContentType: image.type,
    };

    const response = await this._s3Client.upload(parameter).promise();

    return {
      imageUrl: response.Location,
      name: id,
    };
  }
}

module.exports = ImageRepositoryS3;
