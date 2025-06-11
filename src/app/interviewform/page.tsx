"use client";
import Layout from "@/components/layout/Layout";
import React, { useState,useEffect, ChangeEvent, FormEvent } from "react";

type InterviewFormState = {
  fullName: string;
  email: string;
  country: string;
  profession: string;
  impactAreas: string[];
  affiliation: string;
  tariqa: string;
  role: string;
  hasPublicVoice: string;
  website: string;
  interviewGoals: string[];
  interviewDate: string;
  interviewTime: string;
  tone: string;
  additionalNotes: string;
};

const defaultState: InterviewFormState = {
  fullName: "",
  email: "",
  country: "",
  profession: "",
  impactAreas: [],
  affiliation: "",
  tariqa: "",
  role: "",
  hasPublicVoice: "",
  website: "",
  interviewGoals: [],
  interviewDate: "",
  interviewTime: "",
  tone: "",
  additionalNotes: "",
};

interface SaturdayOption {
  date: string;
  formatted: string;
}

const InterviewForm = () => {
  const [formState, setFormState] = useState<InterviewFormState>(defaultState);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof InterviewFormState, string>>>({});
  const [availableSaturdays, setAvailableSaturdays] = useState<SaturdayOption[]>([]);

  // Set up available Saturdays and default date on component load
  useEffect(() => {
    const saturdays = getAvailableSaturdays();
    setAvailableSaturdays(saturdays);

    // Set default date to the next Saturday and default time to 10:00 AM
    if (saturdays.length > 0) {
      setFormState(prev => ({
        ...prev,
        interviewDate: saturdays[0].date,
        interviewTime: '10:00'
      }));
    }
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    // If changing date or time, validate it immediately
    if (name === 'interviewDate' || name === 'interviewTime') {
      validateDateOrTime(name, value);
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormState((prev) => {
      const updatedList = checked
        ? [...(prev[name as keyof InterviewFormState] as string[]), value]
        : (prev[name as keyof InterviewFormState] as string[]).filter((item) => item !== value);
      return { ...prev, [name]: updatedList };
    });
  };

  // Helper function to get available Saturdays for the next few weeks
  const getAvailableSaturdays = (): SaturdayOption[] => {
    const saturdays: SaturdayOption[] = [];
    const today = new Date();
    const startDate = new Date(today);
    
    // Start from today, find next 4 Saturdays
    for (let i = 0; i < 28; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      if (date.getDay() === 6) {  // 6 is Saturday
        saturdays.push({
          date: date.toISOString().split('T')[0],
          formatted: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
          })
        });
        
        if (saturdays.length >= 4) break;
      }
    }
    
    return saturdays;
  };

  // Validate date or time field
  const validateDateOrTime = (name: string, value: string): boolean => {
    let errorMessage = '';
    
    if (name === 'interviewDate' && value) {
      const selectedDate = new Date(value);
      const day = selectedDate.getDay();
      
      // Check if selected day is Saturday (6)
      if (day !== 6) {
        errorMessage = 'Interviews are only available on Saturdays';
      }
    }
    
    if (name === 'interviewTime' && value) {
      const [hours, minutes] = value.split(':').map(Number);
      const timeInMinutes = hours * 60 + minutes;
      
      // Check if time is between 10:00 AM and 2:00 PM
      if (timeInMinutes < 10 * 60 || timeInMinutes > 14 * 60) {
        errorMessage = 'Interviews are only available between 10:00 AM and 2:00 PM EST';
      }
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: errorMessage
    }));
    
    return errorMessage === '';
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof InterviewFormState, string>> = {};

    if (!formState.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formState.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formState.country.trim()) newErrors.country = "Country is required.";
    if (!formState.profession.trim()) newErrors.profession = "Profession is required.";
    if (!formState.impactAreas.length) newErrors.impactAreas = "Select at least one impact area.";
    if (!formState.tariqa) newErrors.tariqa = "Select your spiritual orientation.";
    if (!formState.hasPublicVoice) newErrors.hasPublicVoice = "Please answer this question.";
    if (!formState.interviewGoals.length) newErrors.interviewGoals = "Select at least one interview goal.";

    // Date and time validation with custom restrictions
    if (!formState.interviewDate) {
      newErrors.interviewDate = "Interview date is required.";
    } else {
      const dateValid = validateDateOrTime('interviewDate', formState.interviewDate);
      if (!dateValid) {
        newErrors.interviewDate = errors.interviewDate || "Invalid interview date.";
      }
    }
    
    if (!formState.interviewTime) {
      newErrors.interviewTime = "Interview time is required.";
    } else {
      const timeValid = validateDateOrTime('interviewTime', formState.interviewTime);
      if (!timeValid) {
        newErrors.interviewTime = errors.interviewTime || "Invalid interview time.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submitting form data:", formState);
      setFormSubmitted(true);
      setErrors({});
    }
  };

  return (
    <Layout headerStyle={2} footerStyle={1}>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-3xl my-16 mx-auto p-8 bg-white shadow-2xl rounded-2xl"
      >
        <h2 className="text-2xl font-bold text-center text-fixnix-lightpurple mb-4">
          SSC Interview Application Form
        </h2>

        {formSubmitted && (
          <div className="bg-green-100 border border-fixnix-darkpurple text-fixnix-darkpurple p-4 rounded-lg">
            Thank you! Your interview form has been submitted and confirmation has been send to your email.
          </div>
        )}

        <h2 className="text-xl font-bold text-fixnix-lightpurple mb-4">
          Personal Information
        </h2>

        {[
          { name: "fullName", placeholder: "Full Name", type: "text" },
          { name: "email", placeholder: "Email", type: "email" },
          { name: "country", placeholder: "Country", type: "text" },
          { name: "profession", placeholder: "Profession", type: "text" },
          { name: "affiliation", placeholder: "Institutional Affiliation", type: "text" },
          { name: "website", placeholder: "Website", type: "text" },
        ].map(({ name, placeholder, type }) => (
          <div key={name}>
            <label htmlFor={name} className="block text-sm font-medium text-fixnix-darkpurple mb-1">
              {placeholder}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
              value={(formState as any)[name]}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors[name as keyof InterviewFormState] && (
              <p className="text-red-600 text-sm">{errors[name as keyof InterviewFormState]}</p>
            )}
          </div>
        ))}

        <div>
          <h2 className="text-xl font-bold text-fixnix-lightpurple mb-4">Areas of Impact</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Spiritual Leadership", "Transformative Education", "Integrative Health", "Ethical Justice",
              "Scientific Consciousness", "Cultural Expression", "Eco Stewardship", "Unity Dialogue",
              "Policy Reform", "Youth Empowerment"
            ].map((area) => (
              <label key={area} className="inline-flex items-center space-x-2 text-gray-700">
                <input
                  type="checkbox"
                  name="impactAreas"
                  value={area}
                  checked={formState.impactAreas.includes(area)}
                  onChange={handleCheckboxChange}
                  className="rounded border-gray-300 text-fixnix-lightpurple focus:ring-fixnix-lightpurple"
                />
                <span>{area}</span>
              </label>
            ))}
          </div>
          {errors.impactAreas && <p className="text-red-600 text-sm">{errors.impactAreas}</p>}
        </div>

        <div>
          <h2 className="text-xl font-bold text-fixnix-lightpurple mb-4">Spiritual Orientation</h2>
          <select
            name="tariqa"
            value={formState.tariqa}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="Sufi">Sufi</option>
            <option value="Freethinker">Freethinker</option>
            <option value="Not Affiliated">Not Affiliated</option>
          </select>
          {errors.tariqa && <p className="text-red-600 text-sm">{errors.tariqa}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Do You Have a Public Voice?</label>
          <select
            name="hasPublicVoice"
            value={formState.hasPublicVoice}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.hasPublicVoice && <p className="text-red-600 text-sm">{errors.hasPublicVoice}</p>}
        </div>

        <div>
          <h2 className="text-xl font-bold text-fixnix-lightpurple mb-4">Interview Intent</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Inspire Others", "Share Knowledge", "Network", "Promote Work",
              "Document Experience", "Spiritual Dialogue"
            ].map((goal) => (
              <label key={goal} className="inline-flex items-center space-x-2 text-gray-700">
                <input
                  type="checkbox"
                  name="interviewGoals"
                  value={goal}
                  checked={formState.interviewGoals.includes(goal)}
                  onChange={handleCheckboxChange}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>{goal}</span>
              </label>
            ))}
          </div>
          {errors.interviewGoals && <p className="text-red-600 text-sm">{errors.interviewGoals}</p>}
        </div>

        <div>
          <h2 className="text-xl font-bold text-fixnix-lightpurple mb-4">Interview Preferred Tone</h2>
          <select
            name="tone"
            value={formState.tone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="Mystic">Mystic</option>
            <option value="Scientific">Scientific</option>
            <option value="Academic">Academic</option>
          </select>
        </div>

        <div>
          <h2 className="text-xl font-bold text-fixnix-lightpurple mb-4">Interview Scheduling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Interview Date <span className="text-red-500">*</span>
          </label>
          <select
            name="interviewDate"
            value={formState.interviewDate}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a date</option>
            {availableSaturdays.map((saturday) => (
              <option key={saturday.date} value={saturday.date}>
                {saturday.formatted} (Saturday)
              </option>
            ))}
          </select>
          {errors.interviewDate && (
            <p className="text-red-600 text-sm mt-1">{errors.interviewDate}</p>
          )}
          <p className="text-sm text-gray-500 mt-1">Interviews are only available on Saturdays</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Interview Time (EST) <span className="text-red-500">*</span>
          </label>
          <select
            name="interviewTime"
            value={formState.interviewTime}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a time</option>
            <option value="10:00">10:00 AM</option>
            <option value="10:30">10:30 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="11:30">11:30 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="13:30">1:30 PM</option>
            <option value="14:00">2:00 PM</option>
          </select>
          {errors.interviewTime && (
            <p className="text-red-600 text-sm mt-1">{errors.interviewTime}</p>
          )}
          <p className="text-sm text-gray-500 mt-1">Available between 10:00 AM - 2:00 PM EST</p>
        </div>
      </div>
      </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
          <textarea
            name="additionalNotes"
            rows={4}
            value={formState.additionalNotes}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-fixnix-lightpurple text-white rounded-lg hover:bg-fixnix-darkpurple transition duration-200"
          >
            Submit Interview Form
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default InterviewForm;
