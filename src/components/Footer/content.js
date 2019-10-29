import React from 'react';

// import Icon from '../Icon';
// import SocialButton from '../SocialButton';

// function Socials({ edges }) {
//   return edges.map(edge => (
//     <SocialButton {...edge} key={edge.name}>
//       <Icon name={edge.name} />
//     </SocialButton>
//   ));
// }

function Content({ edges }) {
  return (
    <footer className="AppFooter">
      <div className="container footerContent">
        <h2 className="title">Haydi Sende Aramıza Katıl!</h2>
        <p className="description">Sende aramıza katılarak bu güzel topluluğun bir parçası olabilirsin.</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://tasarimmutfagi.typeform.com/to/zC7CYX"
          className="Btn Btn-primary social-btn"
        >
          Topluluğa Katıl
        </a>
      </div>
      <div className="SocialFields">
        {/* <Socials edges={edges} /> */}
      </div>
    </footer>
  );
}
export default Content;
