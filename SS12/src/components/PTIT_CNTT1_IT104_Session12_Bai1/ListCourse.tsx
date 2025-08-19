

const ListCourse = () => {
  const courses = ['HTML', 'CSS', 'JavaScript', 'ReactJS'];

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2 style={{ fontWeight: 'bold' }}>Danh sách khóa học</h2>
      <ol style={{ 
        display: 'inline-block',
        textAlign: 'left',
        fontSize: '18px',
        marginTop: '5px'
      }}>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ol>
    </div>
  );
};

export default ListCourse;
