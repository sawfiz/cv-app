import Input from './inputs/Input';
import Textarea from './inputs/Textarea';

export default function Experience({
  job,
  updateExperiences,
  saveExperiences,
  deleteExperience,
}) {
  function updateExperience(e, attr) {
    updateExperiences(e, attr, job.id);
  }

  return (
    <div>
      <form>
        <ul>
          <Input
            type="text"
            fieldName={'Position'}
            data={job.Position}
            handleChange={updateExperience}
          />
          <Input
            type="text"
            fieldName={'Company'}
            data={job.Company}
            handleChange={updateExperience}
          />
          <Input
            type="text"
            fieldName={'Location'}
            data={job.Location}
            handleChange={updateExperience}
          />
          <Input
            type="date"
            fieldName={'From'}
            data={job.From}
            handleChange={updateExperience}
          />
          <Input
            type="date"
            fieldName={'To'}
            data={job.To}
            handleChange={updateExperience}
          />
          <Textarea
            fieldName={'Responsibilities'}
            data={job.Responsibilities}
            handleChange={updateExperience}
          />
        </ul>
      </form>
      <button onClick={saveExperiences}>Save</button>
      <button onClick={() => deleteExperience(job.id)}>Delete</button>
    </div>
  );
}
