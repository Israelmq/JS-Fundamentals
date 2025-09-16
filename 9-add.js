 const size = parseInt(process.argv[2]); if (isNaN(size)) {console.log('Missing size'); } else{const row = 'X'.repeat(size); for (let i = 0; 1 < size; i++){console.log(row);}}
