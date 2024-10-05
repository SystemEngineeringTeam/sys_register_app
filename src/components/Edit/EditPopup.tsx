import { Box, Button, Card, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface EditPopupProps {
  //  現在の名前
  currentName: string;
  // 商品名、値段などの変更したいもの
  editName: string;
}
const EditPopup = ({ currentName, editName }: EditPopupProps) => {
  return (
    <Box>
      {/* 画面全体を半透明の黒で覆う */}
      <Box
        sx={{
          userSelect: 'none',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: '0',
          left: '0',
          background: 'black',
          opacity: '0.5',
        }}
      />
      {/* 名前編集カード */}
      <Card
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          // 半透明の要素よりも前に配置
          zIndex: '1',
          minHeight: { xs: '15rem', sm: '18rem' },
          minWidth: { xs: '20rem', sm: '25rem' },
        }}
      >
        {/* バツボタン */}
        <Button sx={{ position: 'fixed', right: '0' }}>
          <ClearIcon style={{ fontSize: '2.5rem' }} />
        </Button>
        <Box sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, margin: { xs: '1.5rem', sm: '3rem' } }}>
          {/* 現在の商品名 : つくね のように表示される */}
          <Box>
            現在の{editName} : {currentName}
          </Box>
          <Box sx={{ marginTop: '0.5rem' }}>変更後の{editName}</Box>
          {/* 入力欄 */}
          <Box sx={{ marginLeft: '2rem' }}>
            <TextField fullWidth inputProps={{ style: { fontSize: '1.5rem' } }} label="必須" />
          </Box>
          <Box sx={{ display: 'flex', position: 'fixed', right: '0' }}>
            {/* キャンセル、保存ボタン */}
            {/* 他のコンポーネントから持ってくるまで仮置き */}
            <Button>仮置き</Button>
            <Button>仮置き</Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default EditPopup;
