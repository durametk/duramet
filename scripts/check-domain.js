// Utility script to check and manage Resend domains
import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_HRy7egPF_pBKnUwmUBmFybZ31UunB8j2V';
const resend = new Resend(RESEND_API_KEY);

// Domain name to check
// You can also pass it as an environment variable: DOMAIN_NAME=yourdomain.com node scripts/check-domain.js
const DOMAIN_NAME = process.env.DOMAIN_NAME || 'duramettechnologies.com';

async function checkDomainStatus() {
  try {
    console.log('🔍 Checking domain status...\n');
    
    // List all domains
    console.log('📋 Listing all domains...');
    const domains = await resend.domains.list();
    
    // Check for API errors
    if (domains.error) {
      console.error('❌ API Error:', domains.error.message);
      if (domains.error.name === 'restricted_api_key') {
        console.error('\n⚠️  Your API key is restricted to only send emails.');
        console.error('   It does not have permission to access domain management features.');
        console.error('\n💡 To check domain status:');
        console.error('   1. Go to https://resend.com/domains');
        console.error('   2. Check your domain status in the dashboard');
        console.error('   3. Or use a full-access API key (not recommended for production)');
        console.error('\n📧 Your current setup:');
        console.error('   - Emails will be sent FROM: noreply@duramettechnologies.com');
        console.error('   - Emails will be sent TO: sales@duramettechnologies.com');
        console.error('   - Once domain is verified in Resend dashboard, emails will work!');
      }
      return;
    }
    
    // Handle different response formats
    const domainsList = domains.data || domains || [];
    
    if (!Array.isArray(domainsList) || domainsList.length === 0) {
      console.log('❌ No domains found. You may need to add a domain first.');
      console.log('💡 Make sure your RESEND_API_KEY is correct and has access to domains.');
      return;
    }
    
    console.log(`✅ Found ${domainsList.length} domain(s):\n`);
    
    // Display all domains first
    domainsList.forEach(d => {
      console.log(`  - ${d.name} (ID: ${d.id}, Status: ${d.status})`);
    });
    console.log('');
    
    // Find the specific domain
    const domain = domainsList.find(d => d.name === DOMAIN_NAME);
    
    if (!domain) {
      console.log(`❌ Domain "${DOMAIN_NAME}" not found.`);
      console.log('\n💡 Available domains listed above.');
      console.log(`💡 To check a different domain, use: DOMAIN_NAME=yourdomain.com node scripts/check-domain.js`);
      return;
    }
    
    // Display domain information
    console.log(`📧 Domain: ${domain.name}`);
    console.log(`   ID: ${domain.id}`);
    console.log(`   Status: ${domain.status}`);
    console.log(`   Region: ${domain.region || 'N/A'}`);
    console.log(`   Created: ${domain.createdAt || 'N/A'}`);
    console.log(`   Open Tracking: ${domain.openTracking ? '✅ Enabled' : '❌ Disabled'}`);
    console.log(`   Click Tracking: ${domain.clickTracking ? '✅ Enabled' : '❌ Disabled'}`);
    
    // Check DNS records
    if (domain.records) {
      console.log('\n📝 DNS Records:');
      domain.records.forEach((record) => {
        console.log(`   ${record.type} ${record.name}: ${record.value || 'N/A'} (Status: ${record.status})`);
      });
    }
    
    // If domain is pending, offer to verify
    if (domain.status === 'pending') {
      console.log('\n⚠️  Domain is pending verification.');
      console.log('   Make sure DNS records are added to your domain provider.');
      console.log('   You can verify the domain by running: npm run verify-domain');
    } else if (domain.status === 'verified') {
      console.log('\n✅ Domain is verified and ready to use!');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('   Response:', error.response);
    }
  }
}

async function verifyDomain(domainId) {
  try {
    console.log('🔐 Verifying domain...\n');
    
    // If domain ID not provided, find it
    if (!domainId) {
      const domains = await resend.domains.list();
      const domain = domains.data?.find(d => d.name === DOMAIN_NAME);
      
      if (!domain) {
        console.log(`❌ Domain "${DOMAIN_NAME}" not found.`);
        return;
      }
      
      domainId = domain.id;
    }
    
    const result = await resend.domains.verify(domainId);
    console.log('✅ Domain verification initiated:', result);
    
  } catch (error) {
    console.error('❌ Error verifying domain:', error.message);
  }
}

async function updateDomainSettings(domainId) {
  try {
    console.log('⚙️  Updating domain settings...\n');
    
    // If domain ID not provided, find it
    if (!domainId) {
      const domains = await resend.domains.list();
      const domain = domains.data?.find(d => d.name === DOMAIN_NAME);
      
      if (!domain) {
        console.log(`❌ Domain "${DOMAIN_NAME}" not found.`);
        return;
      }
      
      domainId = domain.id;
    }
    
    // Update domain settings
    const result = await resend.domains.update({
      id: domainId,
      openTracking: true,  // Enable open tracking
      clickTracking: true, // Enable click tracking
    });
    
    console.log('✅ Domain settings updated:', result);
    
  } catch (error) {
    console.error('❌ Error updating domain:', error.message);
  }
}

// Main function
async function main() {
  const command = process.argv[2];
  
  switch (command) {
    case 'verify':
      await verifyDomain();
      break;
    case 'update':
      await updateDomainSettings();
      break;
    case 'check':
    default:
      await checkDomainStatus();
      break;
  }
}

main();

