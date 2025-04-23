 // Room navigation
 function showRoom(roomId) {
    // Hide all rooms
    document.querySelectorAll('.room').forEach(room => {
        room.classList.remove('active');
    });
    
    // Show the selected room
    document.getElementById(roomId).classList.add('active');
}

// Art details modal
function showArtDetails(artId) {
    const modal = document.getElementById('art-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalArtist = document.getElementById('modal-artist');
    const modalYear = document.getElementById('modal-year');
    const modalDescription = document.getElementById('modal-description');
    
    // Art collection data
    const artData = {
        bw1: {
            image: "./images/bw_1.png",
            title: "Lines of Thought",
            artist: "Emma Blackwood",
            year: "2022",
            description: "A minimalist exploration of line and form, created using charcoal on textured paper. The piece invites viewers to find their own meaning within the abstract patterns."
        },
        bw2: {
            image: "./images/bw_2.jpg",
            title: "Geometric Harmony",
            artist: "Marcus Chen",
            year: "2023",
            description: "This work combines precise geometric forms with spontaneous mark-making, creating a tension between order and chaos that reflects the artist's interest in mathematical principles."
        },
        bw3: {
            image: "./images/bw_3.jpg",
            title: "Urban Silhouette",
            artist: "Sophia Rivera",
            year: "2021",
            description: "A stark depiction of urban architecture reduced to its essential forms. The high contrast between black and white elements creates a dramatic statement about modern living spaces."
        },
        bw4: {
            image: "./images/bw_4.jpg",
            title: "Contemplation",
            artist: "James Wilson",
            year: "2024",
            description: "A minimalist portrait that captures the essence of human emotion through simplified forms and thoughtful negative space, inviting the viewer into a moment of quiet reflection."
        },
        bw5: {
            image: "./images/bw_5.jpg",
            title: "Contemplation",
            artist: "James Wilson",
            year: "2024",
            description: "A minimalist portrait that captures the essence of human emotion through simplified forms and thoughtful negative space, inviting the viewer into a moment of quiet reflection."
        },
        color1: {
            image: "./images/color_1.jpg",
            title: "Summer Fields",
            artist: "Olivia Greene",
            year: "2023",
            description: "This vibrant landscape captures the feeling of a warm summer day, with lush colors and expressive brushwork that evokes the sensation of being surrounded by nature in full bloom."
        },
        color2: {
            image: "./images/color_2.jpg",
            title: "Emotional Currents",
            artist: "David Zhang",
            year: "2022",
            description: "An abstract expressionist piece that uses bold colors and dynamic brushstrokes to convey complex emotional states. The layers of paint create depth and movement across the canvas."
        },
        color3: {
            image: "./images/color_3.jpg",
            title: "Chromatic Meditation",
            artist: "Leila Johnson",
            year: "2024",
            description: "A color field painting that explores the psychological impact of color relationships. The subtle transitions between hues create a meditative space for the viewer."
        },
        color4: {
            image: "./images/color_4.jpg",
            title: "Icon of Now",
            artist: "Tyler Rodriguez",
            year: "2023",
            description: "This pop art portrait comments on contemporary consumer culture through bright colors and graphic elements. The piece blends traditional painting techniques with digital-inspired aesthetics."
        },
        color5: {
            image: "./images/color_5.jpg",
            title: "Icon of Now",
            artist: "Tyler Rodriguez",
            year: "2023",
            description: "This pop art portrait comments on contemporary consumer culture through bright colors and graphic elements. The piece blends traditional painting techniques with digital-inspired aesthetics."
        },
        color6: {
            image: "./images/color_6.jpg",
            title: "Icon of Now",
            artist: "Tyler Rodriguez",
            year: "2023",
            description: "This pop art portrait comments on contemporary consumer culture through bright colors and graphic elements. The piece blends traditional painting techniques with digital-inspired aesthetics."
        },
        color7: {
            image: "./images/color_7.jpg",
            title: "Icon of Now",
            artist: "Tyler Rodriguez",
            year: "2023",
            description: "This pop art portrait comments on contemporary consumer culture through bright colors and graphic elements. The piece blends traditional painting techniques with digital-inspired aesthetics."
        },
        sculpture1: {
            image: "./images/sculpture_blob.jpg",
            title: "Twisted Form",
            artist: "Naomi Clarke",
            year: "2023",
            description: "A bronze sculpture that explores the balance between tension and fluidity. The twisting form seems to defy gravity while maintaining a sense of organic movement."
        },
        sculpture2: {
            image: "./images/sculpture_blood_letter.jpg",
            title: "Geometric Assemblage",
            artist: "Victor Kim",
            year: "2024",
            description: "Created from reclaimed industrial materials, this sculpture juxtaposes geometric precision with the weathered textures of its components, commenting on the relationship between human design and natural processes."
        },
        sculpture3: {
            image: "./images/sculpture_brain.jpg",
            title: "Metallic Flow",
            artist: "Alicia Hernandez",
            year: "2022",
            description: "This polished metal sculpture captures the paradoxical quality of liquid motion in a solid form. Light plays across the surface, changing the viewer's experience as they move around the piece."
        },
        sculpture4: {
            image: "./images/sculpture_computer.png",
            title: "Memory in Stone",
            artist: "Robert Patel",
            year: "2021",
            description: "A contemporary take on classical bust sculpture, this marble piece explores themes of memory and identity. The partially defined features invite viewers to project their own interpretations onto the work."
        },
        sculpture5: {
            image: "./images/sculpture_dryad.png",
            title: "Geometric Assemblage",
            artist: "Victor Kim",
            year: "2024",
            description: "Created from reclaimed industrial materials, this sculpture juxtaposes geometric precision with the weathered textures of its components, commenting on the relationship between human design and natural processes."
        },
        sculpture6: {
            image: "./images/sculpture_octo.jpg",
            title: "Metallic Flow",
            artist: "Alicia Hernandez",
            year: "2022",
            description: "This polished metal sculpture captures the paradoxical quality of liquid motion in a solid form. Light plays across the surface, changing the viewer's experience as they move around the piece."
        },
        sculpture7: {
            image: "./images/sculpture_pool_table.jpg",
            title: "Memory in Stone",
            artist: "Robert Patel",
            year: "2021",
            description: "A contemporary take on classical bust sculpture, this marble piece explores themes of memory and identity. The partially defined features invite viewers to project their own interpretations onto the work."
        }
    };
    
    // Set modal content
    modalImage.src = artData[artId].image;
    modalImage.alt = artData[artId].title;
    modalTitle.textContent = artData[artId].title;
    modalArtist.textContent = "Artist: " + artData[artId].artist;
    modalYear.textContent = "Year: " + artData[artId].year;
    modalDescription.textContent = artData[artId].description;
    
    // Show modal
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('art-modal').classList.remove('active');
}

// Close modal when clicking outside the content
document.getElementById('art-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

// Handle keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});