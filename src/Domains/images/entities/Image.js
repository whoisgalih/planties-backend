class Image {
  constructor(payload) {
    const { buffer, type } = this._verifyPayload(payload);
    this.buffer = buffer;
    this.type = type;
  }

  _verifyPayload(payload) {
    try {
      // Convert the base64 string to a Buffer
      const buffer = Buffer.from(payload, 'base64');

      // Check if the buffer represents an image
      // Check for common image file headers
      const jpgHeader = Buffer.from([0xff, 0xd8, 0xff]);
      const pngHeader = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
      const gifHeader = Buffer.from('GIF87a');
      const bmpHeader = Buffer.from('BM');

      // get ContentType
      let type = '';
      if (buffer.slice(0, jpgHeader.length).equals(jpgHeader)) {
        type = 'image/jpeg';
      } else if (buffer.slice(0, pngHeader.length).equals(pngHeader)) {
        type = 'image/png';
      } else if (buffer.slice(0, gifHeader.length).equals(gifHeader)) {
        type = 'image/gif';
      } else if (buffer.slice(0, bmpHeader.length).equals(bmpHeader)) {
        type = 'image/bmp';
      } else {
        throw new Error('IMAGE.NOT_MEET_DATA_TYPE_SPECIFICATION');
      }

      return { buffer, type };
    } catch (error) {
      console.error(error);
      throw new Error('IMAGE.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = Image;
