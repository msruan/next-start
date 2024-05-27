export default function Home() {

    const [_2faStatus, set2FAStatus] = useState<
  
      "enabled" | "disabled" | "initializing"
  
    >("disabled");
  
    const [qrData, setQRData] = useState<string>();
  
    const [qrSecret, setQRSecret] = useState<string>();
  
    return (
  
      {/* ... */}
  
      <Button
  
        onClick={async () => {
  
          set2FAStatus("initializing");
  
          const response = await fetch("/api/2fa/qrcode");
  
          const data = await response.json();
  
          setQRData(data.data);
  
          setQRSecret(data.secret);
  
        }}
  
      >
  
        Enable 2FA
  
      </Button>
  
      {/* ... */}
  
      <img src={qrData} alt="2FA QR Code" />
  
      {/* ... */}
  
    );
  
  }