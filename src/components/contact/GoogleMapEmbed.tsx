export function GoogleMapEmbed() {
  // Shows the greater Seattle / Puget Sound service area
  // using the Seattle metropolitan area place ID at a wide zoom
  return (
    <div className="overflow-hidden rounded-xl aspect-video w-full">
      <iframe
        title="NW Premium Design LLC service area — Seattle, Bellevue, Tacoma & Greater Puget Sound"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362767.72038667895!2d-122.63029782968747!3d47.389384799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1705000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        className="border-0 h-full w-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
