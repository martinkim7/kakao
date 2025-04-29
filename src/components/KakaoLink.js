import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";

// Material-UI 스타일링
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%", // 16:9
});

const KakaoLink = () => {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [localUrl, setLocalUrl] = useState("");

  useEffect(() => {
    // 사용할 앱의 JavaScript 키를 설정
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("a2b0a2aa412626a2d77a551bc6590594");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (files.length > 0) {
      window.Kakao.Link.uploadImage({
        file: files,
      }).then((res) => {
        sendLink(res.infos.original.url);
      });
    } else {
      sendLink(""); // URL을 빈 문자열로 설정
    }
  };

  const handleUpload = (e) => {
    const imageLocalUrl = URL.createObjectURL(e.target.files[0]);
    setLocalUrl(imageLocalUrl);
    setFiles(e.target.files);
  };

  const sendLink = (imageUrl) => {
    const url = imageUrl || "";
    if (imageUrl) {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "",
          description: text,
          imageUrl: url,
          link: {
            webUrl: url,
            mobileWebUrl: url,
          },
        },
      });
    } else {
      window.Kakao.Link.sendDefault({
        objectType: "text",
        text: text,
        link: {
          webUrl: url,
          mobileWebUrl: url,
        },
      });
    }
    // 상태 초기화
    setText("");
    setFiles([]);
    setLocalUrl("");
  };

  const clean = () => {
    setText("");
    setFiles([]);
    setLocalUrl("");
  };

  return (
    <StyledPaper elevation={1}>
      <TextField
        label="Message"
        placeholder="Send max 200 Character on one time (max 100 character if include Image)"
        fullWidth
        autoFocus
        multiline
        rows={5}
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <StyledButton variant="outlined" color="primary" onClick={clean}>
          Rewrite
        </StyledButton>
        <StyledButton variant="outlined" color="primary" onClick={handleSubmit}>
          Send Kakaotalk
        </StyledButton>
        <input
          accept="image/*"
          id="button-file"
          type="file"
          style={{ display: "none" }}
          onChange={handleUpload}
        />
        <label htmlFor="button-file">
          <StyledButton variant="outlined" color="primary" component="span">
            Upload Image
          </StyledButton>
        </label>
        {localUrl && (
          <Card>
            <StyledCardMedia image={localUrl} title="Uploaded Image" />
          </Card>
        )}
      </div>
    </StyledPaper>
  );
};

export default KakaoLink;
