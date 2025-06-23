// Crypto Cassie After Dark JavaScript

// Character base for after dark (same as regular but with mature context)
const AFTER_DARK_CHARACTER_BASE = "A beautiful Black American woman named Crypto Cassie, age 18-21, 5'10\" tall, 145 lbs, with striking green eyes and wet wavy hair. She has a feminine, shapely, and fit physique (not muscular). Her style rotates between streetwear, classy casual, and beachwear. She has a cute, educational, and mildly seductive voice with a friendly and knowledgeable personality about cryptocurrency.";

// After Dark scene configurations
const AFTER_DARK_SCENES = {
    boudoir: {
        setting: "intimate boudoir setting with soft, warm lighting and luxurious fabrics",
        defaultOutfit: "lingerie",
        mood: "intimate and alluring",
        background: "elegant bedroom with silk sheets, candles, and sophisticated decor"
    },
    "seductive-tutorial": {
        setting: "modern studio setup with mood lighting and educational materials",
        defaultOutfit: "bodysuit",
        mood: "confident and intellectually seductive",
        background: "sleek educational setup with crypto charts and ambient lighting"
    },
    lingerie: {
        setting: "fashion photography studio with professional lighting",
        defaultOutfit: "lingerie",
        mood: "confident and sophisticated",
        background: "minimalist studio with elegant backdrop and professional photography equipment"
    },
    "sensual-dance": {
        setting: "dimly lit dance studio with atmospheric lighting",
        defaultOutfit: "bodysuit",
        mood: "sultry and rhythmic",
        background: "dance studio with mirrors, mood lighting, and sensual atmosphere"
    },
    bedroom: {
        setting: "luxurious bedroom with intimate lighting",
        defaultOutfit: "silk-robe",
        mood: "relaxed and alluring",
        background: "opulent bedroom with silk bedding, soft lighting, and romantic ambiance"
    },
    shower: {
        setting: "elegant bathroom with steam and soft lighting",
        defaultOutfit: "minimal",
        mood: "refreshing and sensual",
        background: "luxury bathroom with glass shower, marble surfaces, and ambient lighting"
    },
    massage: {
        setting: "spa environment with candles and relaxing atmosphere",
        defaultOutfit: "minimal",
        mood: "relaxed and pampered",
        background: "high-end spa with massage table, candles, and tranquil decor"
    },
    "romantic-dinner": {
        setting: "upscale restaurant or intimate dining setting",
        defaultOutfit: "evening-dress",
        mood: "sophisticated and romantic",
        background: "elegant restaurant with candlelight, fine dining, and romantic atmosphere"
    },
    "night-out": {
        setting: "upscale nightclub or lounge with dynamic lighting",
        defaultOutfit: "evening-dress",
        mood: "confident and party-ready",
        background: "sophisticated nightlife venue with neon lights and modern decor"
    },
    photoshoot: {
        setting: "professional photography studio with creative lighting",
        defaultOutfit: "auto",
        mood: "confident and model-like",
        background: "photography studio with professional equipment and artistic lighting setups"
    }
};

// Intensity configurations
const INTENSITY_CONFIGS = {
    mild: "subtly suggestive with tasteful allure",
    medium: "moderately seductive with confident sensuality",
    spicy: "boldly alluring with intense confidence and appeal"
};

// Mood configurations for after dark
const AFTER_DARK_MOODS = {
    confident: "self-assured, empowered, and commanding presence",
    seductive: "alluring, captivating, and irresistibly charming",
    playful: "teasingly flirtatious with mischievous charm",
    sultry: "intensely sensual with smoldering appeal"
};

// After dark outfit styles
const AFTER_DARK_OUTFITS = {
    lingerie: "elegant designer lingerie in luxurious fabrics with sophisticated styling",
    "silk-robe": "flowing silk robe or sleepwear that drapes beautifully and suggests sophistication",
    bodysuit: "form-fitting bodysuit that accentuates her curves while maintaining elegance",
    "evening-dress": "revealing but classy evening dress that showcases her figure tastefully",
    bikini: "designer bikini or swimwear that highlights her athletic and shapely physique",
    "workout-wear": "tight-fitting athletic wear that shows her fit body and confident attitude",
    "casual-revealing": "casual but strategically revealing outfit that maintains style and class",
    minimal: "minimal coverage while maintaining artistic and tasteful presentation",
    auto: "outfit automatically selected based on scene type and intensity level"
};

// Spicy quick templates
const SPICY_TEMPLATES = {
    "boudoir-crypto": {
        customDescription: "reclining elegantly on silk sheets while explaining cryptocurrency market trends with sultry confidence",
        sceneType: "boudoir",
        intensity: "medium",
        mood: "seductive",
        outfitStyle: "lingerie",
        includeBackground: true,
        includeLighting: true,
        includeCamera: true,
        includeProps: true
    },
    "seductive-tutorial": {
        customDescription: "teaching blockchain fundamentals while wearing form-fitting attire and maintaining intense eye contact",
        sceneType: "seductive-tutorial",
        intensity: "medium",
        mood: "confident",
        outfitStyle: "bodysuit",
        includeBackground: true,
        includeLighting: true,
        includeCamera: false,
        includeProps: true
    },
    "sensual-dance": {
        customDescription: "performing a sultry dance routine with smooth, hypnotic movements that showcase her grace and confidence",
        sceneType: "sensual-dance",
        intensity: "spicy",
        mood: "sultry",
        outfitStyle: "bodysuit",
        includeBackground: true,
        includeLighting: true,
        includeCamera: true,
        includeProps: false
    }
};

// Age verification status
let ageVerified = false;

// Initialize after dark functionality
document.addEventListener('DOMContentLoaded', function() {
    checkAgeVerification();
    if (ageVerified) {
        initializeAfterDark();
    }
});

// Check age verification status
function checkAgeVerification() {
    const verified = CryptoCassie.loadFromLocalStorage('ageVerified', false);
    const verificationDate = CryptoCassie.loadFromLocalStorage('ageVerificationDate', null);
    
    // Check if verification is recent (within 24 hours)
    if (verified && verificationDate) {
        const now = new Date().getTime();
        const verifiedTime = new Date(verificationDate).getTime();
        const hoursDiff = (now - verifiedTime) / (1000 * 60 * 60);
        
        if (hoursDiff < 24) {
            ageVerified = true;
            hideAgeVerification();
            return;
        }
    }
    
    // Show age verification modal
    showAgeVerification();
}

// Show age verification modal
function showAgeVerification() {
    const modal = document.getElementById('ageVerificationModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Hide age verification modal
function hideAgeVerification() {
    const modal = document.getElementById('ageVerificationModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Handle age verification
function verifyAge(isAdult) {
    if (isAdult) {
        ageVerified = true;
        CryptoCassie.saveToLocalStorage('ageVerified', true);
        CryptoCassie.saveToLocalStorage('ageVerificationDate', new Date().toISOString());
        hideAgeVerification();
        initializeAfterDark();
    } else {
        // Redirect to main page
        window.location.href = 'index.html';
    }
}

// Initialize after dark functionality
function initializeAfterDark() {
    setupAfterDarkFormHandlers();
    setupAfterDarkTemplateHandlers();
    setupAfterDarkStyles();
}

// Setup form handlers for after dark
function setupAfterDarkFormHandlers() {
    const form = document.getElementById('afterDarkForm');
    const copyBtn = document.getElementById('copyDarkPromptBtn');
    const exportBtn = document.getElementById('exportDarkHunyuanBtn');

    if (form) {
        form.addEventListener('submit', handleAfterDarkFormSubmit);
    }

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const promptText = document.getElementById('generatedDarkPrompt').textContent;
            CryptoCassie.copyToClipboard(promptText, copyBtn);
        });
    }

    if (exportBtn) {
        exportBtn.addEventListener('click', handleAfterDarkHunyuanExport);
    }
}

// Setup template handlers for after dark
function setupAfterDarkTemplateHandlers() {
    const templateCards = document.querySelectorAll('.template-card');
    
    templateCards.forEach(card => {
        const button = card.querySelector('button');
        if (button) {
            button.addEventListener('click', () => {
                const templateId = card.getAttribute('data-template');
                applyAfterDarkTemplate(templateId);
            });
        }
    });
}

// Setup after dark specific styles
function setupAfterDarkStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .intensity-toggles,
        .mood-toggles {
            display: flex;
            gap: var(--spacing-md);
            flex-wrap: wrap;
        }
    `;
    document.head.appendChild(style);
}

// Handle after dark form submission
function handleAfterDarkFormSubmit(e) {
    e.preventDefault();
    
    const formData = getAfterDarkFormData();
    const generatedPrompt = generateAfterDarkPrompt(formData);
    
    // Display generated prompt
    document.getElementById('generatedDarkPrompt').textContent = generatedPrompt;
    
    // Save to history (separate from regular prompts)
    saveAfterDarkPromptToHistory({
        prompt: generatedPrompt,
        formData: formData,
        timestamp: new Date().toISOString()
    });
}

// Get after dark form data
function getAfterDarkFormData() {
    return {
        customDescription: document.getElementById('darkCustomDescription').value.trim(),
        sceneType: document.getElementById('darkSceneType').value,
        intensity: document.querySelector('input[name="intensity"]:checked').value,
        mood: document.querySelector('input[name="mood"]:checked').value,
        outfitStyle: document.getElementById('darkOutfitStyle').value,
        includeBackground: document.getElementById('darkIncludeBackground').checked,
        includeLighting: document.getElementById('darkIncludeLighting').checked,
        includeCamera: document.getElementById('darkIncludeCamera').checked,
        includeProps: document.getElementById('includeProps').checked
    };
}

// Generate after dark prompt
function generateAfterDarkPrompt(formData) {
    let prompt = AFTER_DARK_CHARACTER_BASE;
    
    // Add scene description
    if (formData.customDescription) {
        prompt += ` Cassie is ${formData.customDescription}.`;
    }
    
    // Add scene configuration
    const sceneConfig = AFTER_DARK_SCENES[formData.sceneType];
    if (sceneConfig) {
        prompt += ` The scene takes place in a ${sceneConfig.setting}.`;
        
        // Add outfit
        let outfitStyle = formData.outfitStyle;
        if (outfitStyle === 'auto') {
            outfitStyle = sceneConfig.defaultOutfit;
        }
        
        if (AFTER_DARK_OUTFITS[outfitStyle]) {
            prompt += ` She is wearing ${AFTER_DARK_OUTFITS[outfitStyle]}.`;
        }
        
        // Add intensity and mood
        const intensityConfig = INTENSITY_CONFIGS[formData.intensity];
        const moodConfig = AFTER_DARK_MOODS[formData.mood];
        
        if (intensityConfig && moodConfig) {
            prompt += ` Her demeanor is ${intensityConfig} with ${moodConfig}, combined with ${sceneConfig.mood}.`;
        }
        
        // Add background details
        if (formData.includeBackground && sceneConfig.background) {
            prompt += ` The background features ${sceneConfig.background}.`;
        }
        
        // Add lighting details
        if (formData.includeLighting) {
            prompt += ` The lighting is professionally crafted to enhance the sensual mood and highlight her natural beauty with dramatic shadows and warm tones.`;
        }
        
        // Add camera suggestions
        if (formData.includeCamera) {
            prompt += ` Camera angle: Intimate framing that captures her allure and confidence, with careful attention to flattering angles and composition.`;
        }
        
        // Add props if requested
        if (formData.includeProps) {
            prompt += ` Scene includes tasteful props and accessories that enhance the atmosphere and complement the overall aesthetic.`;
        }
    }
    
    // Add content compliance note
    prompt += " Content maintains platform policy compliance while maximizing artistic and sensual appeal. Cassie's consistent appearance and personality are preserved as defined in her character profile.";
    
    return prompt;
}

// Apply after dark template
function applyAfterDarkTemplate(templateId) {
    const template = SPICY_TEMPLATES[templateId];
    if (!template) return;
    
    // Fill form fields
    document.getElementById('darkCustomDescription').value = template.customDescription;
    document.getElementById('darkSceneType').value = template.sceneType;
    document.querySelector(`input[name="intensity"][value="${template.intensity}"]`).checked = true;
    document.querySelector(`input[name="mood"][value="${template.mood}"]`).checked = true;
    document.getElementById('darkOutfitStyle').value = template.outfitStyle;
    document.getElementById('darkIncludeBackground').checked = template.includeBackground;
    document.getElementById('darkIncludeLighting').checked = template.includeLighting;
    document.getElementById('darkIncludeCamera').checked = template.includeCamera;
    document.getElementById('includeProps').checked = template.includeProps;
    
    // Auto-generate prompt
    const formData = getAfterDarkFormData();
    const generatedPrompt = generateAfterDarkPrompt(formData);
    
    document.getElementById('generatedDarkPrompt').textContent = generatedPrompt;
}

// Save after dark prompt to history
function saveAfterDarkPromptToHistory(promptData) {
    let history = CryptoCassie.loadFromLocalStorage('afterDarkPromptHistory', []);
    
    // Add new prompt to beginning of array
    history.unshift(promptData);
    
    // Keep only last 5 prompts
    history = history.slice(0, 5);
    
    CryptoCassie.saveToLocalStorage('afterDarkPromptHistory', history);
}

// Handle after dark HunyuanVideo export
function handleAfterDarkHunyuanExport() {
    const promptText = document.getElementById('generatedDarkPrompt').textContent;
    
    if (!promptText || promptText.includes('Click "Generate Spicy Prompt"')) {
        alert('Please generate a spicy prompt first before exporting.');
        return;
    }
    
    // Add content warning to exported prompt
    const exportPrompt = `[MATURE CONTENT - 18+ ONLY]\n\n${promptText}\n\n[This prompt contains mature themes and is intended for adult audiences only. Ensure your video generation platform supports such content and complies with all applicable terms of service.]`;
    
    // Store prompt for download
    window.currentAfterDarkPromptForExport = exportPrompt;
    
    // Create and show custom modal for after dark export
    showAfterDarkExportModal();
}

// Show after dark export modal
function showAfterDarkExportModal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('afterDarkExportModal');
    if (!modal) {
        modal = createAfterDarkExportModal();
        document.body.appendChild(modal);
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Create after dark export modal
function createAfterDarkExportModal() {
    const modal = document.createElement('div');
    modal.id = 'afterDarkExportModal';
    modal.className = 'modal';
    modal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 2000; align-items: center; justify-content: center;';
    
    modal.innerHTML = `
        <div class="modal-content" style="background: var(--dark); color: var(--white); border-radius: var(--radius-lg); padding: var(--spacing-2xl); max-width: 600px; margin: var(--spacing-md); max-height: 80vh; overflow-y: auto; border: 2px solid var(--primary);">
            <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
                <h3>🔥 After Dark HunyuanVideo Export</h3>
                <button onclick="hideAfterDarkExportModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--white);">&times;</button>
            </div>
            
            <div class="modal-body">
                <div style="background: rgba(231, 76, 60, 0.2); padding: var(--spacing-lg); border-radius: var(--radius-md); margin-bottom: var(--spacing-lg); border: 1px solid #e74c3c;">
                    <h4 style="color: #e74c3c;">⚠️ Mature Content Warning</h4>
                    <p>This prompt contains mature themes intended for adult audiences (18+) only. Ensure your video generation platform supports such content and complies with all applicable terms of service.</p>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.1); padding: var(--spacing-lg); border-radius: var(--radius-md); margin-bottom: var(--spacing-lg);">
                    <h4>📝 Step 1: Download Mature Prompt</h4>
                    <p>Click the button below to download your after dark prompt as a .txt file:</p>
                    <button id="downloadAfterDarkPromptBtn" class="btn btn-primary">📥 Download After-Dark-Prompt.txt</button>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.1); padding: var(--spacing-lg); border-radius: var(--radius-md); margin-bottom: var(--spacing-lg);">
                    <h4>🔧 Step 2: Platform Compatibility</h4>
                    <p>Before using with HunyuanVideo:</p>
                    <ul style="margin: var(--spacing-md) 0; padding-left: var(--spacing-lg);">
                        <li>Verify the platform allows mature content</li>
                        <li>Check terms of service compliance</li>
                        <li>Ensure proper age verification is in place</li>
                        <li>Consider content moderation requirements</li>
                    </ul>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.1); padding: var(--spacing-lg); border-radius: var(--radius-md);">
                    <h4>🚀 Step 3: Responsible Generation</h4>
                    <p>When generating content:</p>
                    <ul style="margin: var(--spacing-md) 0; padding-left: var(--spacing-lg);">
                        <li>Use appropriate content warnings</li>
                        <li>Respect platform guidelines</li>
                        <li>Consider your audience and distribution</li>
                        <li>Maintain artistic and tasteful standards</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    // Setup download button
    modal.querySelector('#downloadAfterDarkPromptBtn').onclick = () => {
        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
        const filename = `crypto-cassie-after-dark-prompt-${timestamp}.txt`;
        CryptoCassie.downloadFile(window.currentAfterDarkPromptForExport, filename, 'text/plain');
    };
    
    return modal;
}

// Hide after dark export modal
function hideAfterDarkExportModal() {
    const modal = document.getElementById('afterDarkExportModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Export functions for global access
window.verifyAge = verifyAge;
window.hideAfterDarkExportModal = hideAfterDarkExportModal;

