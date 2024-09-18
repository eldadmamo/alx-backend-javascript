const fs = require('fs');

/**
 * A function that accepts a path to a csv file
 * @param {string} path - path to csv file
 */
function countStudents(path) {
  try {
    const studentData = fs.readFileSync(path, 'utf8');
    const students = studentData
      .split('\n')
      .filter((student) => student.length > 0)
      .map((student) => student.split(','));

    students.shift();
    console.log(`Number of students: ${students.length}`);
    const filedOfStudy = {};
    students.forEach((student) => {
      if (!filedOfStudy[student[3]]) filedOfStudy[student[3]] = [];
      filedOfStudy[student[3]].push(student[0]);
    });

    Object.keys(filedOfStudy).forEach((key) => {
      console.log(
        `Number of students in ${key}: ${
          filedOfStudy[key].length
        }. List: ${filedOfStudy[key].join(', ')}`,
      );
    });
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
