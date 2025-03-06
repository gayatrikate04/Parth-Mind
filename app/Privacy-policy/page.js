import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ backgroundColor: '#121212', color: '#FFFFFF', fontFamily: 'Arial, sans-serif', padding: '40px', lineHeight: 1.8 }}>
      <h1 style={{ color: '#90CAF9', textAlign: 'center', marginBottom: '20px' }}>Privacy Policy</h1>
      <p style={{ fontSize: '16px', textAlign: 'center', marginBottom: '30px' }}><strong>Effective Date:</strong> [March 2, 2025]</p>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>Welcome to <strong>ParthMind</strong>! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website and services.</p>

      <h2 style={{ color: '#90CAF9', marginBottom: '15px' }}>1. Information We Collect</h2>
      <p style={{ fontSize: '18px', marginBottom: '15px' }}>When you use <strong>ParthMind</strong>, we may collect the following types of information:</p>
      <ul style={{ fontSize: '16px', marginBottom: '25px' }}>
        <li><strong>Personal Information:</strong> Name, email address, and profile picture (if provided during signup).</li>
        <li><strong>Chat Data:</strong> Messages exchanged with the chatbot to improve user experience.</li>
        <li><strong>Diary Entries:</strong> Personal journal entries created in <strong>ParthDiary</strong> (stored securely and accessible only to you).</li>
        <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and session duration.</li>
      </ul>

      <h2 style={{ color: '#90CAF9', marginBottom: '15px' }}>2. How We Use Your Information</h2>
      <p style={{ fontSize: '18px', marginBottom: '15px' }}>We use the collected information to:</p>
      <ul style={{ fontSize: '16px', marginBottom: '25px' }}>
        <li>Provide, improve, and personalize the <strong>ParthMind</strong> experience.</li>
        <li>Enhance chatbot responses and recommendations.</li>
        <li>Securely store and manage diary entries.</li>
        <li>Analyze user behavior for service improvements.</li>
      </ul>

      <h2 style={{ color: '#90CAF9', marginBottom: '15px' }}>3. Data Protection and Security</h2>
      <p style={{ fontSize: '18px', marginBottom: '25px' }}>We implement industry-standard security measures to protect your data from unauthorized access, loss, or misuse. However, no online service is 100% secure, so we recommend using strong passwords and keeping your login credentials safe.</p>

     
      <h2 style={{ color: '#90CAF9', marginBottom: '15px' }}>5. Your Rights and Choices</h2>
      <p style={{ fontSize: '18px', marginBottom: '25px' }}>You have the right to:</p>
      <ul style={{ fontSize: '16px', marginBottom: '25px' }}>
        <li>Access, modify, or delete your personal information.</li>
        <li>Request data deletion of your chat history or diary entries.</li>
        <li>Opt-out of analytics tracking (if applicable).</li>
      </ul>

      <h2 style={{ color: '#90CAF9', marginBottom: '15px' }}>6. Changes to This Privacy Policy</h2>
      <p style={{ fontSize: '18px', marginBottom: '25px' }}>We may update this policy from time to time. If significant changes occur, we will notify you via email or through our website.</p>

      <h2 style={{ color: '#90CAF9', marginBottom: '15px' }}>7. Contact Us</h2>
      <p style={{ fontSize: '18px', marginBottom: '25px' }}>If you have any questions or concerns about this Privacy Policy, you can contact us at <strong>[parthmind114@gmail.com]</strong>.</p>

      <p style={{ fontSize: '18px' }}>By using <strong>ParthMind</strong>, you agree to the terms outlined in this Privacy Policy.</p>
    </div>
  );
};

export default PrivacyPolicy;

