export const areas = [
  {
    id: 'hardware',
    code: 'HW',
    title: 'Hardware & ESP32',
    description: 'Boards, circuits, firmware, and the useful things learned while making them work.',
    detail: 'Build logs and experiments will live here.',
    status: 'Project area',
    className: 'hardware',
    image: '/images/hardware.jpg',
    imageDescription: 'ESP32 development board, representative archive image'
  },
  {
    id: 'security',
    code: 'SEC',
    title: 'Security research',
    description: 'Careful investigation, vulnerability notes, and responsible disclosure records.',
    detail: 'Published research and CVE notes will live here.',
    status: 'Research area',
    className: 'security',
    image: '/images/security.jpg',
    imageDescription: 'Server rack, representative archive image'
  },
  {
    id: 'ctf',
    code: 'CTF',
    title: 'CTF writeups',
    description: 'The path from first clue to solution, with the dead ends worth remembering.',
    detail: 'Challenge writeups will live here.',
    status: 'Writing area',
    className: 'ctf',
    image: '/images/ctf.jpg',
    imageDescription: 'Code on a computer monitor, representative archive image'
  },
  {
    id: 'notes',
    code: 'LOG',
    title: 'Field notes',
    description: 'Small observations, unfinished questions, and ideas worth keeping in the archive.',
    detail: 'Short posts will live here.',
    status: 'Journal area',
    className: 'notes',
    image: '/images/notes.jpg',
    imageDescription: 'Printed circuit board close-up, representative archive image'
  }
] as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'About', href: '/about/' }
];
