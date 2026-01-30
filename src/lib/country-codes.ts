// Country codes for phone number dropdowns
export interface CountryCode {
  code: string;
  dialCode: string;
  name: string;
  flag?: string;
}

export const countryCodes: CountryCode[] = [
  { code: "IN", dialCode: "+91", name: "India" },
  { code: "GB", dialCode: "+44", name: "United Kingdom" },
  { code: "CA", dialCode: "+1", name: "Canada" },
  { code: "AU", dialCode: "+61", name: "Australia" },
  { code: "DE", dialCode: "+49", name: "Germany" },
  { code: "FR", dialCode: "+33", name: "France" },
  { code: "IT", dialCode: "+39", name: "Italy" },
  { code: "ES", dialCode: "+34", name: "Spain" },
  { code: "JP", dialCode: "+81", name: "Japan" },
  { code: "CN", dialCode: "+86", name: "China" },
  { code: "KR", dialCode: "+82", name: "South Korea" },
  { code: "SG", dialCode: "+65", name: "Singapore" },
  { code: "MY", dialCode: "+60", name: "Malaysia" },
  { code: "TH", dialCode: "+66", name: "Thailand" },
  { code: "ID", dialCode: "+62", name: "Indonesia" },
  { code: "VN", dialCode: "+84", name: "Vietnam" },
  { code: "PH", dialCode: "+63", name: "Philippines" },
  { code: "AE", dialCode: "+971", name: "United Arab Emirates" },
  { code: "SA", dialCode: "+966", name: "Saudi Arabia" },
  { code: "QA", dialCode: "+974", name: "Qatar" },
  { code: "KW", dialCode: "+965", name: "Kuwait" },
  { code: "BH", dialCode: "+973", name: "Bahrain" },
  { code: "OM", dialCode: "+968", name: "Oman" },
  { code: "IL", dialCode: "+972", name: "Israel" },
  { code: "TR", dialCode: "+90", name: "Turkey" },
  { code: "RU", dialCode: "+7", name: "Russia" },
  { code: "BR", dialCode: "+55", name: "Brazil" },
  { code: "MX", dialCode: "+52", name: "Mexico" },
  { code: "AR", dialCode: "+54", name: "Argentina" },
  { code: "CL", dialCode: "+56", name: "Chile" },
  { code: "CO", dialCode: "+57", name: "Colombia" },
  { code: "ZA", dialCode: "+27", name: "South Africa" },
  { code: "NG", dialCode: "+234", name: "Nigeria" },
  { code: "EG", dialCode: "+20", name: "Egypt" },
  { code: "KE", dialCode: "+254", name: "Kenya" },
  { code: "NL", dialCode: "+31", name: "Netherlands" },
  { code: "BE", dialCode: "+32", name: "Belgium" },
  { code: "CH", dialCode: "+41", name: "Switzerland" },
  { code: "AT", dialCode: "+43", name: "Austria" },
  { code: "SE", dialCode: "+46", name: "Sweden" },
  { code: "NO", dialCode: "+47", name: "Norway" },
  { code: "DK", dialCode: "+45", name: "Denmark" },
  { code: "FI", dialCode: "+358", name: "Finland" },
  { code: "PL", dialCode: "+48", name: "Poland" },
  { code: "CZ", dialCode: "+420", name: "Czech Republic" },
  { code: "HU", dialCode: "+36", name: "Hungary" },
  { code: "IE", dialCode: "+353", name: "Ireland" },
  { code: "PT", dialCode: "+351", name: "Portugal" },
  { code: "GR", dialCode: "+30", name: "Greece" },
  { code: "NZ", dialCode: "+64", name: "New Zealand" },
  { code: "BD", dialCode: "+880", name: "Bangladesh" },
  { code: "PK", dialCode: "+92", name: "Pakistan" },
  { code: "LK", dialCode: "+94", name: "Sri Lanka" },
  { code: "NP", dialCode: "+977", name: "Nepal" },
];

// Get country code by country name (for backward compatibility)
export const getCountryCodeByName = (countryName: string): string => {
  const country = countryCodes.find(
    (c) => c.name.toLowerCase() === countryName.toLowerCase()
  );
  return country?.dialCode || "+91"; // Default to India
};

// Get country code by dial code
export const getCountryByDialCode = (dialCode: string): CountryCode | undefined => {
  return countryCodes.find((c) => c.dialCode === dialCode);
};

