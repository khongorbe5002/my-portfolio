import TopDirectory from './TopDirectory';
import resumePdf from './assets/resume.pdf'

export default function Resume() {
  return (
    <div className="subpage-container subpage-container--aligned">
      <TopDirectory />
      
      <div style={{ marginTop: '2rem' }}>        
        {/* This anchor tag automatically triggers a file download */}
        <a 
          href={resumePdf}
          download="Honey_Bat-Erdene_Resume.pdf" 
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#36345eff',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '30px',
            marginBottom: '2rem'
          }}
        >
          Download PDF
        </a>

        {/* This embeds the PDF directly on the page so they can read it without downloading */}
        <iframe 
          src={resumePdf} 
          height="800px" 
          title="resume_pdf"
          style={{ border: '1px solid #ccc', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
}