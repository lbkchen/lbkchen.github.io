import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

export default class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  render() {
    return (
      <div>
        <Gallery photos={this.props.photos} onClick={this.openLightbox} />
        <Lightbox
          theme={{ container: { background: "rgba(0, 0, 0, 0.85)" } }}
          images={this.props.photos.map(x => ({
            ...x,
            srcset: x.srcSet,
            caption: x.title
          }))}
          backdropClosesModal={true}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          width={1600}
        />
      </div>
    );
  }
}
