import { useSelector } from 'react-redux';
import Card from './Card';
import image from '../assets/Back-end-dev-ProCert.png';
import image1 from '../assets/Data-analyses.png';
import image2 from '../assets/DevOps-Cloud-Agile-Specialization-Final.png';
import image3 from '../assets/MLS.subject-banners-01_Subject-Logo-.png';
import image4 from '../assets/subject1.png';
import { Subject } from '../types/type';

export const SubjectsCards = () => {
  const images = [image, image1, image2, image3, image4];
  const subjects = useSelector((state: any) => state.subjects.data);
  const subjectsCards = subjects.map((subject: Subject, index: number) => {
    return (
      <div key={subject.id} className="col-12 col-md-6 col-lg-4">
        <div className="m-2">
          <Card
            image={
              images[index]
                ? images[index]
                : images[Math.floor(Math.random() * images.length)]
            }
            title={subject.title}
            description={subject.description.slice(0, 100) + '...'}
          />
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="d-flex flex-column  flex-md-row flex-lg-row flex-wrap  ">
        {subjectsCards}
      </div>
    </>
  );
};
