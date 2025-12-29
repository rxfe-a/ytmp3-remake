
const NotificationHolder = document.createElement("div");
NotificationHolder.id = "notification-holder";
document.body.appendChild(NotificationHolder);
NotificationHolder.style.display = "flex";
NotificationHolder.style.flexDirection = "column";
NotificationHolder.style.alignItems = "center";
NotificationHolder.style.position = "fixed";
NotificationHolder.style.top = "10px";
NotificationHolder.style.left = "50%";
NotificationHolder.style.transform = "translateX(-50%)";
NotificationHolder.style.zIndex = "1000";

function NewMessage(message, duration, type) {
  var msgtoMake = 'classic'
  if (type === 'error') {
    msgtoMake = 'error'
  } else if (type === 'success') {
    msgtoMake = 'success'
  }
}