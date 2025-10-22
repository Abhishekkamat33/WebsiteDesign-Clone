import React, { useState } from 'react';
import { Phone, Mail, MapPin, Upload, X } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    websiteUrl: '',
    message: '',
    howDidYouHear: '',
    file: null
  });

  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);
  const [fileName, setFileName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'message') {
      setCharCount(value.length);
    }

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'text/plain'
      ];

      if (validTypes.includes(file.type) || file.type.startsWith('image/')) {
        setFormData(prev => ({ ...prev, file }));
        setFileName(file.name);
      } else {
        alert('Invalid file type. Please upload a valid document or image.');
      }
    }
  };

  const removeFile = () => {
    setFormData(prev => ({ ...prev, file: null }));
    setFileName('');
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  const InputField = ({ label, name, type = 'text', required = false, ...props }) => {
    const value = formData[name];
    const error = errors[name];

    return (
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleInputChange}
          className={`w-full px-3 pt-6 pb-2 border rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={name}
          className="absolute left-3 pointer-events-none transition-all bg-white px-1"
          style={{
            top: value ? '0.5rem' : '50%',
            transform: value ? 'none' : 'translateY(-50%)',
            fontSize: value ? '0.75rem' : '1rem',
            color: value ? '#3b82f6' : '#6b7280'
          }}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {error && (
          <span className="text-red-500 text-sm mt-1 block">{error}</span>
        )}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen py-4 sm:py-8 lg:py-12 px-2 sm:px-4">
      <div className="w-full max-w-[1000px] mx-auto bg-gray-200 lg:ml-[20%] p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Form Section */}
          <div className="flex-1 lg:flex-[1]">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-bold text-gray-900">
                Let's get started
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <InputField
                label="First Name"
                name="firstName"
                required
                autoComplete="given-name"
              />

              <InputField
                label="Last Name"
                name="lastName"
                required
                autoComplete="family-name"
              />

              <InputField
                label="Company Name"
                name="companyName"
                required
                autoComplete="organization"
              />

              <InputField
                label="Email Address"
                name="email"
                type="email"
                required
                autoComplete="email"
              />

              <InputField
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                required
                autoComplete="tel"
              />

              <InputField
                label="Website URL"
                name="websiteUrl"
                type="url"
                autoComplete="url"
              />

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  maxLength={750}
                  rows={5}
                  className="w-full px-3 pt-8 pb-8 border border-gray-300 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 pointer-events-none transition-all bg-white px-1"
                  style={{
                    top: formData.message ? '0.75rem' : '2rem',
                    fontSize: formData.message ? '0.75rem' : '1rem',
                    color: formData.message ? '#3b82f6' : '#6b7280'
                  }}
                >
                  If possible, please provide a description of your need or project
                </label>
                <span className="absolute right-3 bottom-2 text-xs text-gray-400">
                  {charCount} out of 750 max characters
                </span>
              </div>

              <InputField
                label="How did you hear about us?"
                name="howDidYouHear"
                autoComplete="off"
              />

              {/* File Upload */}
              <div>
                <label
                  htmlFor="fileUpload"
                  className={`block border-2 border-dashed rounded-lg p-4 sm:p-6 text-center cursor-pointer transition-all ${
                    fileName
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 hover:border-blue-500 hover:bg-gray-50'
                  }`}
                >
                  <Upload className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 text-gray-400" />
                  <h6 className="text-sm font-semibold text-gray-700 mb-1">Upload Document</h6>
                  <p className="text-xs text-gray-500">Click to browse or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Supports: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT, Images
                  </p>
                  {fileName && (
                    <div className="mt-3 text-sm text-green-600 font-medium flex items-center justify-center gap-2">
                      <span>✓</span> {fileName}
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  onChange={handleFileChange}
                  accept=".xlsx,.xls,image/*,.doc,.docx,.ppt,.pptx,.txt,.pdf"
                  className="hidden"
                />
                {fileName && (
                  <button
                    type="button"
                    onClick={removeFile}
                    className="mt-3 flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Remove file
                  </button>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-red-600 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold text-base sm:text-lg hover:bg-red-700 active:bg-red-800 transition-colors focus:outline-none focus:ring-4 focus:ring-red-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="flex-shrink-0  lg:w-[280px] xl:w-[320px] py-4 sm:py-6 lg:py-8 border-t lg:border-t-0 border-gray-300 mt-6 lg:mt-0 ">
            <div className="space-y-6 sm:space-y-8">
              {/* Phone */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="tel:+18779326691"
                    className="text-base sm:text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors block"
                  >
                    +1 (877) 932-6691
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <a
                    href="mailto:info@americaneagle.com"
                    className="text-base sm:text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors block break-all"
                  >
                    info@americaneagle.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="/locations"
                    className="text-base sm:text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors block"
                  >
                    Our Locations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}