// Quick DNS checker - verify DNS records are live
import { Resend } from 'resend';
import dns from 'dns';
import { promisify } from 'util';

const resolveTxt = promisify(dns.resolveTxt);
const resolveMx = promisify(dns.resolveMx);

const DOMAIN = 'duramettechnologies.com';

async function checkDNSRecords() {
  console.log(`🔍 Checking DNS records for ${DOMAIN}...\n`);
  
  try {
    // Check DKIM record
    console.log('📝 Checking DKIM record (resend._domainkey)...');
    try {
      const dkimRecords = await resolveTxt(`resend._domainkey.${DOMAIN}`);
      console.log('✅ DKIM record found:', dkimRecords);
    } catch (error) {
      console.log('❌ DKIM record not found or not propagated yet');
    }
    
    // Check SPF record
    console.log('\n📝 Checking SPF record (send)...');
    try {
      const spfRecords = await resolveTxt(`send.${DOMAIN}`);
      console.log('✅ SPF record found:', spfRecords);
    } catch (error) {
      console.log('❌ SPF record not found or not propagated yet');
    }
    
    // Check MX record
    console.log('\n📝 Checking MX record (send)...');
    try {
      const mxRecords = await resolveMx(`send.${DOMAIN}`);
      console.log('✅ MX record found:', mxRecords);
    } catch (error) {
      console.log('❌ MX record not found or not propagated yet');
    }
    
    console.log('\n💡 If records are found, try verifying in Resend dashboard immediately!');
    console.log('💡 DNS propagation can take 15 minutes to 2 hours typically.');
    
  } catch (error) {
    console.error('❌ Error checking DNS:', error.message);
  }
}

checkDNSRecords();

