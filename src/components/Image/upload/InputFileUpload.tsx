import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { deleteImage, getImageUrl, uploadImage } from '@/firebase/firebaseStorage';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/login/AdminLogin';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const InputFileUpload = () => {
  // ユーザー情報
  const user = useAtomValue(userAtom);
  const uid = user?.uid;

  // 送信中かどうかのstate
  const [loading, setLoading] = useState(false);

  // 画像を保存するためのStringのstate
  const [preview, setPreview] = useState<string | null>(null);
  // 送信する画像
  const [image, setImage] = useState<File | null>(null);

  // 画像の名前
  const itemID = '2cvlYVy8zF1uB0hci0Hf';

  // ファイルを選択したときの処理
  const onDrop = (file: FileList) => {
    // // プレビュー表示のためにFileReaderで読み込む
    // const reader = new FileReader();
    // reader.onload = () => {
    //   setPreview(reader.result as string);
    // };
    // reader.readAsDataURL(file[0]);
    // 送信する画像をstateに保存
    setImage(file[0]);
  };

  // 画像を送信する関数
  function sendImage() {
    setLoading(true);
    try {
      if (image) {
        uploadImage(image, uid, itemID, setLoading);
      } else {
        console.error('画像が選択されていません');
        setLoading(false);
      }
    } catch (error) {
      console.error('画像送信エラー:', error);
      setLoading(false);
    }
  }

  // プレビュー表示のための画像取得
  function getPreview() {
    getImageUrl(uid, itemID).then((url) => {
      setPreview(url);
    });
  }
  // プレビューを消去
  function deletePreview() {
    deleteImage(uid, itemID);
    setPreview(null);
  }

  return (
    <div>
      {/* ファイル選択ボタン */}
      <Button component="label" role={undefined} startIcon={<CloudUploadIcon />} tabIndex={-1} variant="contained">
        Upload files
        <VisuallyHiddenInput
          accept="image/*"
          onChange={(event) => {
            onDrop(event.target.files!);
          }}
          type="file"
        />
      </Button>
      {/* 送信ボタン */}
      <LoadingButton
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        onClick={sendImage}
        variant="contained"
      >
        Send
      </LoadingButton>

      {/* プレビュー表示 */}
      <Box>
        <Button onClick={getPreview}>プレビューを表示</Button>
        <Typography>プレビュー</Typography>
        {preview && <img alt="プレビュー" src={preview} width="100%" />}
        <Button onClick={deletePreview}>プレビューを消去</Button>
      </Box>
    </div>
  );
};
export default InputFileUpload;
