import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, Sparkles } from 'lucide-react';
import ReportModal from './ReportModal';

const DownloadLauncher = () => {
  const [open, setOpen] = useState(false);
  const [jobId, setJobId] = useState('1248');

  return (
    <section className="relative z-10 mx-auto max-w-4xl px-6">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 text-blue-600">
            <Sparkles size={18} />
            <span className="text-sm font-medium">New</span>
          </div>
          <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">Elegant report export</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Create a sleek, animated download experience that delights users. Add optional attachments and start the download with buttery-smooth motion.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <input
              value={jobId}
              onChange={(e) => setJobId(e.target.value)}
              className="w-36 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Job ID"
            />
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 shadow-lg shadow-blue-600/20"
            >
              <FileDown size={18} /> Download report
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 shadow-sm"
        >
          <h3 className="text-base font-medium text-gray-900 dark:text-white">What you get</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• Animated modal with smooth spring transitions</li>
            <li>• Progress feedback and success state</li>
            <li>• Optional attachment toggle</li>
            <li>• Auto-close once the download starts</li>
          </ul>
        </motion.div>
      </div>

      <ReportModal isOpen={open} onClose={() => setOpen(false)} jobId={jobId} />
    </section>
  );
};

export default DownloadLauncher;
