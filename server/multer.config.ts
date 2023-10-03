import { diskStorage } from 'multer';

export const multerConfig = {
  storage: diskStorage({
    destination: './files', 
    filename: (req, file, callback) => {
      const timestamp = Date.now();
      callback(null, `${timestamp}-${file.originalname}`);
    },
  }),
};