import SlideShow from '../../Components/SlideShow';

const Movies = () => {
  return (
    <div>
      <div className='page-layout'>
        <div className='main-column'>
          <div className='first-row'>
            <div className='r1-block1'>
              <SlideShow category={'cinemine'} />
            </div>
            <div className='r1-block2'>
              {/* <SlideShow category={'latest'} /> */}
            </div>
          </div>
          <div className='second-row'>
            <div className='r2-block1'>{/* <SlideShow category={3} /> */}</div>
            <div className='r2-block2'>{/* <SlideShow category={4} /> */}</div>
            <div className='r2-block3'>{/* <SlideShow category={5} /> */}</div>
          </div>
          <div className='third-row'></div>
        </div>

        <div className='genre-column'>
          <div className='gr1'></div>
          <div className='gr2'></div>
          <div className='gr3'></div>
          <div className='gr4'></div>
        </div>
      </div>
    </div>
  );
};
export default Movies;
