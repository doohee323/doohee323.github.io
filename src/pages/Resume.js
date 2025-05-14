import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import '../assets/resume.css';

function Resume() {
  const [resumeContent, setResumeContent] = useState('');
  const printComponentRef = useRef(null);

  const handlePrint = () => {
    // 오늘 날짜를 YYYY-MM-DD 형식으로 포맷팅
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    // 인쇄 전에 문서 제목을 변경하여 PDF 파일명에 반영되도록 함
    const originalTitle = document.title;
    document.title = `resume_${formattedDate}`;
    
    window.print();
    
    // 인쇄 후 원래 제목으로 복원
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  useEffect(() => {
    // 마크다운 이력서 파일 가져오기
    fetch('/resume.md')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch resume markdown');
        }
        return response.text();
      })
      .then(text => {
        setResumeContent(text);
      })
      .catch(error => {
        console.error('Error fetching resume markdown:', error);
        setResumeContent('# 이력서 파일을 찾을 수 없습니다.\n파일을 public 폴더에 추가해주세요.');
      });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column my-4">
      {/* A4 크기에 맞춘 이력서 미리보기 */}
      <div className="resume-document mx-auto" ref={printComponentRef}>
        <div className="a4-preview">
          <div className="resume-content">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{resumeContent}</ReactMarkdown>
          </div>
        </div>
      </div>

      {/* 인쇄 버튼 */}
      <div className="button-container mb-4 mt-4">
        <Button onClick={handlePrint} className="print-button">
          Save/Print Resume as PDF
        </Button>
      </div>
    </div>
  );
}

export default Resume; 