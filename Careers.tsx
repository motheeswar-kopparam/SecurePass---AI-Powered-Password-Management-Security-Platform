import React from 'react';
import { Briefcase } from 'lucide-react';

function Careers() {
  const jobs = [
    {
      title: 'Senior Security Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: "We're looking for a Senior Security Engineer to help us build and maintain secure systems.",
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Join our product team to help shape the future of password security.',
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help us build beautiful and secure user interfaces for our products.',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Briefcase className="w-6 h-6 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-900">Careers</h1>
      </div>

      <div className="bg-white shadow-sm rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-8">
            {jobs.map((job, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-8 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                    <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Apply Now
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;