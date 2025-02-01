import html2canvas from 'html2canvas';

export const exportToImage = async (): Promise<string> => {
  const avatarElement = document.querySelector('.avatar-canvas');
  if (!avatarElement) return '';

  try {
    const canvas = await html2canvas(avatarElement as HTMLElement);
    const imageUrl = canvas.toDataURL('image/png');
    
    // Create a download link
    const link = document.createElement('a');
    link.download = 'my-avatar.png';
    link.href = imageUrl;
    link.click();

    return imageUrl;
  } catch (error) {
    console.error('Error exporting image:', error);
    return '';
  }
};