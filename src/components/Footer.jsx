import useSubject from '../hooks/useSubject'

function Footer() {
  const subject = useSubject()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{subject.name} - Chân Trời Sáng Tạo</p>
        <p className="footer-sub">Website ôn tập {subject.name} dành cho học sinh</p>
      </div>
    </footer>
  )
}

export default Footer
