export const projects = [
  {
    slug: 'phishing-detection',
    title: 'ML Phishing Detection System',
    tag: 'Machine Learning · Cybersecurity',
    short: 'A web system that detects phishing URLs using a trained ML model.',
    year: '2025',
    status: 'Completed',
    stack: ['Python', 'Flask', 'scikit-learn', 'HTML', 'CSS', 'JavaScript'],
    overview:
      'A machine learning-powered web system designed to identify phishing URLs in real time. Built to help everyday users recognize malicious links before they click.',
    problem:
      'Phishing attacks remain one of the most common ways people get scammed online — especially in regions where awareness is low. Most users can\'t tell a fake URL from a real one.',
    approach:
      'I trained a supervised classification model on a labeled dataset of phishing and legitimate URLs, extracting features like URL length, presence of special characters, subdomain depth, and HTTPS usage. The model is served through a Flask web app with a simple, fast interface.',
    results: [
      'High accuracy on test dataset',
      'Real-time URL classification via web form',
      'Clean, mobile-friendly interface',
    ],
    lessons:
      'Learned how feature engineering impacts model performance, and how to bridge ML models into user-facing web apps.',
  },
  {
    slug: 'chumapay-vsl',
    title: 'ChumaPay VSL',
    tag: 'In Progress · Fintech · Malawi',
    short: 'A savings & loan platform built for Malawian village groups.',
    year: '2026',
    status: 'In Progress',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    overview:
      'A digital platform for Village Savings and Loan (VSL) groups in Malawi — replacing paper ledgers with a transparent, mobile-friendly system for tracking contributions, loans, and payouts.',
    problem:
      'VSL groups are the backbone of local saving in rural Malawi, but record-keeping is manual, error-prone, and often lost. Members lack visibility into group finances.',
    approach:
      'Designing a role-based web app where group admins can record contributions and loan disbursements, while members can view their own balance and group totals. Focused on simplicity for low-literacy users and offline-friendly design.',
    results: [
      'Currently in design & early build phase',
      'Focus on trust, transparency, and simplicity',
      'Targeted at real VSL groups in Mzuzu region',
    ],
    lessons:
      'Learning how much design thinking matters when building for users with different tech literacy levels.',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}