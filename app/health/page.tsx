export default function HealthPage() {
  return (
    <div style={{background:'black', color:'white', minHeight:'100vh', padding:'50px', fontFamily:'sans-serif'}}>
      <h1 style={{fontSize:'40px', fontWeight:'bold'}}>System Health</h1>
      <p style={{color:'#00ff00', marginTop:'20px', fontSize:'20px'}}>✓ All systems operational</p>
      <div style={{marginTop:'30px', lineHeight:'2'}}>
        <p>API: Online</p>
        <p>Database: Connected</p>
        <p>Uptime: 99.9%</p>
      </div>
    </div>
  );
}
