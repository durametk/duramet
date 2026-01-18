// Utility script to check and manage Resend domains
import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_HRy7egPF_pBKnUwmUBmFybZ31UunB8j2V';
const resend = new Resend(RESEND_API_KEY);

// Domain name to check (update this to your domain)
// You can also pass it as an environment variable: DOMAIN_NAME=duramet.k npm run check-domain
const DOMAIN_NAME = process.env.DOMAIN_NAME || 'duramettechnologies.com'; // Change to 'duramet.k' if that's your domain

async function checkDomainStatus() {
  try {
    console.log('🔍 Checking domain status...\n');
    
    // List all domains
    console.log('📋 Listing all domains...');
    const domains = await resend.domains.list();
    
    if (domains.data && domains.data.length === 0) {
      console.log('❌ No domains found. You may need to add a domain first.');
      return;
    }
    
    console.log(`✅ Found ${domains.data?.length || 0} domain(s):\n`);
    
    // Find the specific domain
    const domain = domains.data?.find(d => d.name === DOMAIN_NAME);
    
    if (!domain) {
      console.log(`❌ Domain "${DOMAIN_NAME}" not found.`);
      console.log('\nAvailable domains:');
      domains.data?.forEach(d => {
        console.log(`  - ${d.name} (ID: ${d.id})`);
      });
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
      domain.records.forEach((record: any) => {
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
    
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('   Response:', error.response);
    }
  }
}

async function verifyDomain(domainId?: string) {
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
    
  } catch (error: any) {
    console.error('❌ Error verifying domain:', error.message);
  }
}

async function updateDomainSettings(domainId?: string) {
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
    
  } catch (error: any) {
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

