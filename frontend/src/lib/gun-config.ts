import Gun from 'gun';
import 'gun/sea';
import 'gun/axe';

// Initialize Gun
const gun = Gun({
  peers: ['http://localhost:8765/gun'] // You can add more peer servers here
});

// Export the gun instance
export default gun;

// Export a user instance
export const user = gun.user().recall({sessionStorage: true});

