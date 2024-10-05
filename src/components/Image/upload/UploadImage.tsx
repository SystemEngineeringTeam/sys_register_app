import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Card, IconButton, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const UploadImageContena = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isFlere, setIsFlere] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    // ファイルをプレビュー表示するためにFileReaderで読み込む
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string); // 画像のデータURLをプレビュー用のstateに保存
      setIsFlere(true);
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
    <Box>
      <Card sx={{ width: '70%', position: 'fixed', ml: '15%', mt: '5%', mb: '5%', height: '70%' }}>
        {isFlere && (
          <Button
            color="error"
            onClick={() => {
              setPreview(null);
              setIsFlere(false);
            }}
            sx={{ mt: 2 }}
            variant="outlined"
          >
            消去
          </Button>
        )}
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
            height: '100%',
            alignItems: 'center',
          }}
        >
          <input {...getInputProps()} />
          <IconButton color="primary">
            <CloudUploadIcon sx={{ fontSize: 48 }} />
          </IconButton>
          <Typography variant="h6">
            {isFlere
              ? '画像をアップロードしました'
              : isDragActive
                ? 'ここに画像をドロップしてください'
                : '画像をドラッグ＆ドロップするか、クリックしてファイルを選択してください'}
          </Typography>
          <Button color="primary" sx={{ mt: 2 }} variant="contained">
            ファイルを選択
          </Button>
          {/* ファイルがあるときに消去ボタンを表示 */}

          {preview && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">プレビュー</Typography>
              <img
                alt="Image Preview"
                src={preview}
                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
            </Box>
          )}
        </Box>
      </Card>
    </Box>
  );
};
export default UploadImageContena;
