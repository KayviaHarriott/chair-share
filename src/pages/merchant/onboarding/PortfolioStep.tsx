import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  IconButton,
  TextField,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import { Grid } from '../../../components/Grid';
;
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import type { PortfolioImage } from '../../../types/merchant';

interface PortfolioStepProps {
  portfolio: PortfolioImage[];
  onUpdate: (portfolio: PortfolioImage[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const MAX_IMAGES = 6;

export const PortfolioStep = ({ portfolio, onUpdate, onNext, onBack }: PortfolioStepProps) => {
  const [images, setImages] = useState<PortfolioImage[]>(portfolio);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const remainingSlots = MAX_IMAGES - images.length;
    if (remainingSlots <= 0) {
      alert(`Maximum ${MAX_IMAGES} images allowed`);
      return;
    }

    const newImages: PortfolioImage[] = [];
    const filesToProcess = Math.min(files.length, remainingSlots);

    for (let i = 0; i < filesToProcess; i++) {
      const file = files[i];
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert(`${file.name} is not an image file`);
        continue;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} is too large. Maximum size is 5MB`);
        continue;
      }

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage: PortfolioImage = {
          id: Date.now().toString() + i,
          url: e.target?.result as string,
          caption: '',
          order: images.length + newImages.length,
        };
        newImages.push(newImage);

        if (newImages.length === filesToProcess) {
          const updatedImages = [...images, ...newImages];
          setImages(updatedImages);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (id: string) => {
    const updatedImages = images.filter((img) => img.id !== id).map((img, index) => ({
      ...img,
      order: index,
    }));
    setImages(updatedImages);
  };

  const handleCaptionChange = (id: string, caption: string) => {
    const updatedImages = images.map((img) =>
      img.id === id ? { ...img, caption } : img
    );
    setImages(updatedImages);
  };

  const handleNext = () => {
    // Portfolio is optional, but if images are added, they should have captions
    const imagesWithoutCaptions = images.filter((img) => !img.caption.trim());
    
    if (imagesWithoutCaptions.length > 0) {
      const proceed = window.confirm(
        `${imagesWithoutCaptions.length} image(s) don't have captions. Continue anyway?`
      );
      if (!proceed) return;
    }

    onUpdate(images);
    onNext();
  };

  const handleSkip = () => {
    onUpdate([]);
    onNext();
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Portfolio
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        Upload up to {MAX_IMAGES} images showcasing your work
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ mb: 3, display: 'block' }}>
        Maximum file size: 5MB per image. Supported formats: JPG, PNG, WebP
      </Typography>

      {images.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'grey.50' }}>
          <AddPhotoAlternateIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography color="text.secondary" gutterBottom>
            No images uploaded yet
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
            Portfolio images help clients see your work quality
          </Typography>
          <Button
            variant="contained"
            component="label"
            startIcon={<AddPhotoAlternateIcon />}
          >
            Upload Images
            <input
              type="file"
              hidden
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
          </Button>
        </Paper>
      ) : (
        <>
          <Grid container spacing={2}>
            {images.map((image) => (
              <Grid item xs={12} sm={6} md={4} key={image.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={image.url}
                    alt={image.caption || 'Portfolio image'}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <TextField
                      fullWidth
                      size="small"
                      label="Caption"
                      value={image.caption}
                      onChange={(e) => handleCaptionChange(image.id, e.target.value)}
                      placeholder="Describe this image..."
                    />
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDeleteImage(image.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {images.length < MAX_IMAGES && (
            <Box sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                component="label"
                startIcon={<AddPhotoAlternateIcon />}
                fullWidth
              >
                Add More Images ({images.length}/{MAX_IMAGES})
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                />
              </Button>
            </Box>
          )}
        </>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button onClick={onBack}>
          Back
        </Button>
        <Box>
          {images.length === 0 && (
            <Button onClick={handleSkip} sx={{ mr: 1 }}>
              Skip for Now
            </Button>
          )}
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
