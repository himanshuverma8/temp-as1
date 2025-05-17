import multer from 'multer';
const storage = multer.memoryStorage();

const fileFilter = (_req, file, cb) => {
  const ok = /csv|vnd\.ms-excel|spreadsheetml|vnd\.openxmlformats/.test(
    file.mimetype
  );
  cb(null, ok);
};

export const upload = multer({ storage, fileFilter }).single('file');
