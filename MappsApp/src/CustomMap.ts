//instruction to every other  other classes how they can be a argument to addmarker
interface Mapable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mapable: Mapable): void {
    const marker = new google.maps.Marker({
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng
      },
      map: this.googleMap
    });

    marker.addListener("click", () => {
      const infowindow = new google.maps.InfoWindow({
        content: "hi there"
      });

      infowindow.open(this.googleMap,marker);

    });
  }
}
