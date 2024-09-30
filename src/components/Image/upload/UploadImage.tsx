import { useCallback, useState } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDropzone } from 'react-dropzone';

const UploadImageContena = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    // ファイルをプレビュー表示するためにFileReaderで読み込む
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string); // 画像のデータURLをプレビュー用のstateに保存
    };
    reader.readAsDataURL(file);

    // サーバーへのアップロードもここに追加可能

  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpg', '.jpeg', '.png'] },
    multiple: false,
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed grey',
        borderRadius: '10px',
        p: 3,
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'border 0.2s ease-in-out',
        borderColor: isDragActive ? 'primary.main' : 'grey.500',
        '&:hover': {
          borderColor: 'primary.main',
        },
      }}
    >
      <input {...getInputProps()} />
      <IconButton color="primary">
        <CloudUploadIcon sx={{ fontSize: 48 }} />
      </IconButton>
      <Typography variant="h6">
        {isDragActive
          ? 'ここに画像をドロップしてください'
          : '画像をドラッグ＆ドロップするか、クリックしてファイルを選択'}
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        ファイルを選択
      </Button>

      {preview && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">プレビュー</Typography>
          <img src={preview} alt="Image Preview" style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }} />
        </Box>
      )}
    </Box>
  );
};
export default UploadImageContena;
