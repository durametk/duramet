import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { countryCodes } from "@/lib/country-codes";

interface PhoneInputProps {
  id?: string;
  label?: string;
  value: string;
  countryCode: string;
  onPhoneChange: (value: string) => void;
  onCountryCodeChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  id = "phone",
  label = "Phone",
  value,
  countryCode,
  onPhoneChange,
  onCountryCodeChange,
  error,
  placeholder = "yournumber",
  required = false,
}) => {
  return (
    <div>
      {label && (
        <Label htmlFor={id}>
          {label} {required && "*"}
        </Label>
      )}
      <div className="flex gap-2">
        <Select value={countryCode} onValueChange={onCountryCodeChange}>
          <SelectTrigger className={`w-[80px] ${error ? "border-destructive" : ""}`}>
            <SelectValue placeholder="Code" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {countryCodes.map((country) => (
              <SelectItem key={country.code} value={country.dialCode}>
                {country.dialCode}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          id={id}
          type="tel"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onPhoneChange(e.target.value)}
          className={`flex-1 ${error ? "border-destructive" : ""}`}
        />
      </div>
      {error && <p className="text-destructive text-sm mt-1">{error}</p>}
    </div>
  );
};

