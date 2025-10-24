import mongoose from "mongoose";

const collegeaddschemaschema = new mongoose.Schema (
    {
  "title": "College Information Form",
  "type": "object",
  "properties": {
    "basicInformation": {
      "type": "object",
      "title": "Basic Information",
      "required": ["collegeLogo", "collegeCoverPhoto", "collegeName", "establishYear", "websiteLink"],
      "properties": {
        "collegeLogo": {
          "type": "string",
          "format": "binary",
          "description": "Upload college logo image file"
        },
        "collegeCoverPhoto": {
          "type": "string",
          "format": "binary",
          "description": "Upload college cover photo"
        },
        "collegeName": {
          "type": "string",
          "description": "Official name of the college",
          "minLength": 1
        },
        "establishYear": {
          "type": "integer",
          "description": "Year the college was established",
          "minimum": 1900,
          "maximum": 2040,
          "example": 1990
        },
        "websiteLink": {
          "type": "string",
          "format": "uri",
          "description": "Official college website URL",
          "pattern": "^https://",
          "example": "https://example.com"
        },
        "affiliatedUniversity": {
          "type": "string",
          "description": "Name of affiliated university (if applicable)"
        }
      }
    },
    "contactInformation": {
      "type": "object",
      "title": "Contact Information",
      "required": ["collegeEmail", "phoneNumber", "landlineNumber", "naacGrade", "principalDirectorName", "pinZipCode"],
      "properties": {
        "collegeEmail": {
          "type": "string",
          "format": "email",
          "description": "Official college email address",
          "example": "contact@college.edu"
        },
        "phoneNumber": {
          "type": "string",
          "pattern": "^\\+?[1-9]\\d{1,14}$",
          "description": "College phone number with country code",
          "example": "+91 1234567890"
        },
        "landlineNumber": {
          "type": "string",
          "pattern": "^[0-9]{3,4}-[0-9]{6,7}$",
          "description": "College landline number",
          "example": "0123-456789"
        },
        "naacGrade": {
          "type": "string",
          "enum": ["A++", "A+", "A", "B++", "B+", "B", "C", "Not Accredited"],
          "description": "NAAC accreditation grade"
        },
        "principalDirectorName": {
          "type": "string",
          "description": "Name of the principal or director",
          "minLength": 1
        },
        "pinZipCode": {
          "type": "string",
          "pattern": "^[0-9]{5,6}$",
          "description": "PIN or ZIP code of college location"
        }
      }
    },
    "locationDetails": {
      "type": "object",
      "title": "Location Details",
      "required": ["country", "state", "city", "package", "address"],
      "properties": {
        "country": {
          "type": "string",
          "description": "Country where college is located"
        },
        "state": {
          "type": "string",
          "description": "State/Province where college is located"
        },
        "city": {
          "type": "string",
          "description": "City where college is located"
        },
        "package": {
          "type": "string",
          "description": "Package or location category"
        },
        "address": {
          "type": "string",
          "description": "Complete address of the college",
          "minLength": 10
        }
      }
    },
    "additionalInformation": {
      "type": "object",
      "title": "Additional Information",
      "required": ["collegeDescription", "collegeLocationUrl", "collegeForumLink"],
      "properties": {
        "collegeDescription": {
          "type": "string",
          "description": "Detailed description about the college, facilities, achievements, etc.",
          "minLength": 50
        },
        "collegeLocationUrl": {
          "type": "string",
          "format": "uri",
          "description": "Google Maps URL of college location",
          "pattern": "^https://maps\\.google\\.com/.*|^https://goo\\.gl/maps/.*"
        },
        "collegeForumLink": {
          "type": "string",
          "format": "uri",
          "description": "URL to college forum or discussion board"
        }
      }
    },
    "seoSettings": {
      "type": "object",
      "title": "SEO Settings",
      "required": ["allowIndexing", "metaTitle", "metaKeywords", "metaDescription"],
      "properties": {
        "allowIndexing": {
          "type": "boolean",
          "description": "Allow search engines to index this college page",
          "default": true
        },
        "metaTitle": {
          "type": "string",
          "description": "SEO meta title for the college page",
          "maxLength": 60
        },
        "metaKeywords": {
          "type": "string",
          "description": "SEO keywords separated by commas",
          "pattern": "^[a-zA-Z0-9, ]+$"
        },
        "metaDescription": {
          "type": "string",
          "description": "SEO meta description (150-160 characters recommended)",
          "minLength": 50,
          "maxLength": 160
        }
      }
    }
  },
  "required": [
    "basicInformation",
    "contactInformation",
    "locationDetails",
    "additionalInformation",
    "seoSettings"
  ]
});

const collegeaddschema = mongoose.model('collegeaddschema', collegeaddschemaschema)

export default collegeaddschema
