export function GoogleMapEmbed() {
  return (
    <div className="overflow-hidden rounded-xl aspect-video w-full">
      <iframe
        title="NW Premium Design LLC service area — Seattle, WA"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171473.39218578516!2d-122.5200072!3d47.6062095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1705000000000!5m2!1sen!2sus"
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
