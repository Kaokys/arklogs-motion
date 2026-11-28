export const projects = [
  {
    slug: 'esp32-weather-station',
    title: 'ESP32 Weather Station',
    category: 'Embedded systems',
    summary: 'A little desktop station for temperature and humidity.',
    cover: '/weather-station.svg',
    tools: ['ESP32', 'BME280', 'I²C'],
    notes: [
      'Start with an ESP32 and a BME280 on a breadboard. Read temperature, humidity, and pressure over I²C and check the readings in the serial monitor.',
      'Add a small display for a quick glance at the room conditions. Keep the sensor away from the ESP32 and the display so their heat has less effect on the readings.',
    ],
  },
  {
    slug: 'field-notes-dashboard',
    title: 'Field Notes Dashboard',
    category: 'Frontend',
    summary: 'A searchable index for build notes, photos, and in-progress ideas.',
    cover: '/field-notes-dashboard.svg',
    tools: ['Astro', 'TypeScript', 'CSS'],
    notes: [
      'Store the notes in Markdown and generate the index at build time. Give each entry a title, a date, and a short description.',
      'Use category filters to browse entries and give each note a permanent URL so it can be shared directly.',
    ],
  },
];
