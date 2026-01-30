import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
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
  const [open, setOpen] = useState(false);

  return (
    <div>
      {label && (
        <Label htmlFor={id}>
          {label} {required && "*"}
        </Label>
      )}
      <div className="flex gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className={cn(
                "w-[80px] justify-between",
                error && "border-destructive"
              )}
            >
              {countryCode || "Code"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0" align="start">
            <Command>
              <CommandInput placeholder="Search code..." />
              <CommandList>
                <CommandEmpty>No country code found.</CommandEmpty>
                <CommandGroup>
                  {countryCodes.map((country) => (
                    <CommandItem
                      key={country.code}
                      value={`${country.dialCode} ${country.code}`}
                      onSelect={() => {
                        onCountryCodeChange(country.dialCode);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          countryCode === country.dialCode ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {country.dialCode}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
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

