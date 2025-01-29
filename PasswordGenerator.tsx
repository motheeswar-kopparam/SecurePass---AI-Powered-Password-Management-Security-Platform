import React, { useState } from 'react';
import { Copy, RefreshCw, Shield } from 'lucide-react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  });
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (options.uppercase) chars += uppercase;
    if (options.lowercase) chars += lowercase;
    if (options.numbers) chars += numbers;
    if (options.symbols) chars += symbols;

    if (chars === '') {
      setPassword('Please select at least one option');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = async () => {
    if (password && password !== 'Please select at least one option') {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-8">
      <div className="flex items-center justify-center space-x-2">
        <Shield className="w-8 h-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-900">Password Generator</h1>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full bg-gray-50 rounded-lg py-3 px-4 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Your password will appear here"
          />
          <button
            onClick={copyToClipboard}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition-colors"
            disabled={!password || password === 'Please select at least one option'}
          >
            <Copy className="w-5 h-5" />
          </button>
          {copied && (
            <span className="absolute -top-8 right-0 text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
              Copied!
            </span>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="flex justify-between text-sm font-medium text-gray-700">
              Password Length
              <span className="text-indigo-600">{length} characters</span>
            </label>
            <input
              type="range"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700">Include:</h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(options).map(([key, value]) => (
                <label key={key} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() => setOptions(prev => ({ ...prev, [key]: !prev[key] }))}
                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700 capitalize">{key}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Generate Password</span>
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;