import Input from './inputs/Input';

export default function Education({
  learning,
  updateEducations,
  saveEducations,
  deleteEducation,
}) {
  function updateEducation(e, attr) {
    updateEducations(e, attr, learning.id);
  }

  return (
    <div>
      <form>
        <ul>
          <Input
            type="text"
            fieldName={'Degree'}
            data={learning.Degree}
            handleChange={updateEducation}
          />
          <Input
            type="text"
            fieldName={'Major'}
            data={learning.Major}
            handleChange={updateEducation}
          />
          <Input
            type="text"
            fieldName={'School'}
            data={learning.School}
            handleChange={updateEducation}
            />
          <Input
            type="date"
            fieldName={'From'}
            data={learning.From}
            handleChange={updateEducation}
            />
          <Input
            type="date"
            fieldName={'To'}
            data={learning.To}
            handleChange={updateEducation}
          />
        </ul>
      </form>
      <button onClick={saveEducations}>Save</button>
      <button onClick={() => deleteEducation(learning.id)}>Delete</button>
    </div>
  );
}
