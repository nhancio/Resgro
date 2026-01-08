# EmailJS Template Configuration

## Template Setup Instructions

1. Go to https://www.emailjs.com and sign up/login
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create a new Email Template
4. Use the template content below

## Email Template Content

**Subject:**
```
New Contact Form Submission from RESGRO Website
```

**Email Body (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #f97316;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            border: 1px solid #ddd;
            border-top: none;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #f97316;
            display: block;
            margin-bottom: 5px;
        }
        .value {
            color: #333;
            padding: 8px;
            background-color: white;
            border-left: 3px solid #f97316;
            padding-left: 12px;
        }
        .message-box {
            background-color: white;
            padding: 15px;
            border-left: 3px solid #f97316;
            margin-top: 10px;
            white-space: pre-wrap;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Contact Form Submission</h2>
        <p>RESGRO Website</p>
    </div>
    
    <div class="content">
        <div class="field">
            <span class="label">Name:</span>
            <div class="value">{{from_name}}</div>
        </div>
        
        <div class="field">
            <span class="label">Email:</span>
            <div class="value">{{from_email}}</div>
        </div>
        
        <div class="field">
            <span class="label">Restaurant Name:</span>
            <div class="value">{{restaurant}}</div>
        </div>
        
        <div class="field">
            <span class="label">Message:</span>
            <div class="message-box">{{message}}</div>
        </div>
    </div>
    
    <div class="footer">
        <p>This email was sent from the RESGRO contact form.</p>
        <p>Reply directly to: {{from_email}}</p>
    </div>
</body>
</html>
```

**Email Body (Plain Text Alternative):**
```
New Contact Form Submission from RESGRO Website

Name: {{from_name}}
Email: {{from_email}}
Restaurant Name: {{restaurant}}

Message:
{{message}}

---
This email was sent from the RESGRO contact form.
Reply directly to: {{from_email}}
```

## Template Variables

Make sure these variables are set in your EmailJS template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{restaurant}}` - Restaurant name (optional)
- `{{message}}` - Message content
- `{{to_email}}` - Recipient email (partha@idigitalmind.com.au)

## Configuration Steps

1. **Create Email Service:**
   - Go to Email Services in EmailJS dashboard
   - Add a new service (Gmail recommended)
   - Connect your email account
   - Copy the Service ID

2. **Create Email Template:**
   - Go to Email Templates
   - Create a new template
   - Paste the HTML content above
   - Set the subject line
   - Copy the Template ID

3. **Get Public Key:**
   - Go to Account > API Keys
   - Copy your Public Key

4. **Update .env file:**
   - Open `.env` file in the project root
   - Replace the placeholder values with your actual IDs and keys:
     ```
     VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
     VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
     VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxx
     ```

5. **Test the form:**
   - Fill out the contact form on your website
   - Check that emails are received at partha@idigitalmind.com.au

## Important Notes

- The `.env` file is already in `.gitignore` so your keys won't be committed
- Use `.env.example` as a template for other developers
- Never commit your actual EmailJS keys to version control
- The email will be sent from your connected email service account

