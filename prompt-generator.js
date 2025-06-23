// Crypto Cassie Prompt Generator JavaScript

// Character base prompt (locked and consistent)
const CHARACTER_BASE = "A beautiful Black American woman named Crypto Cassie, age 18-21, 5'10\" tall, 145 lbs, with striking green eyes and wet wavy hair. She has a feminine, shapely, and fit physique (not muscular). Her style rotates between streetwear, classy casual, and beachwear. She has a cute, educational, and mildly seductive voice with a friendly and knowledgeable personality about cryptocurrency.";

// Scene templates and configurations
const SCENE_CONFIGS = {
    tutorial: {
        setting: "modern educational setting with clean lighting",
        outfit: "classy-casual",
        mood: "professional yet approachable",
        background: "minimalist office or studio with crypto-themed decorations"
    },
    beach: {
        setting: "beautiful beach with crystal clear water and white sand",
        outfit: "beachwear",
        mood: "relaxed and playful",
        background: "tropical paradise with palm trees and ocean waves"
    },
    dancing: {
        setting: "vibrant dance floor or studio with dynamic lighting",
        outfit: "streetwear",
        mood: "energetic and joyful",
        background: "modern dance studio with mirrors and colorful lights"
    },
    casual: {
        setting: "comfortable indoor space with warm lighting",
        outfit: "classy-casual",
        mood: "friendly and conversational",
        background: "cozy living room or cafe with modern decor"
    },
    workout: {
        setting: "modern fitness studio or outdoor exercise area",
        outfit: "streetwear",
        mood: "motivated and energetic",
        background: "well-equipped gym or scenic outdoor workout space"
    },
    office: {
        setting: "professional office environment with modern technology",
        outfit: "classy-casual",
        mood: "confident and knowledgeable",
        background: "sleek office with multiple monitors showing crypto charts"
    },
    street: {
        setting: "urban street environment with city backdrop",
        outfit: "streetwear",
        mood: "cool and confident",
        background: "vibrant city street with modern architecture"
    },
    home: {
        setting: "comfortable home environment with personal touches",
        outfit: "classy-casual",
        mood: "relaxed and intimate",
        background: "stylish home interior with personal crypto memorabilia"
    },
    crypto: {
        setting: "high-tech trading environment with multiple screens",
        outfit: "classy-casual",
        mood: "focused and analytical",
        background: "professional trading setup with crypto charts and data"
    },
    social: {
        setting: "social media content creation setup",
        outfit: "streetwear",
        mood: "engaging and charismatic",
        background: "trendy content creation space with ring lights and cameras"
    }
};

// Tone configurations
const TONE_CONFIGS = {
    friendly: "warm, welcoming, and approachable demeanor",
    educational: "knowledgeable, clear, and instructive manner",
    seductive: "alluring, confident, and subtly flirtatious attitude",
    playful: "fun, energetic, and lighthearted personality"
};

// Outfit descriptions
const OUTFIT_STYLES = {
    streetwear: "trendy urban streetwear including stylish sneakers, fitted jeans or joggers, and a fashionable crop top or hoodie",
    "classy-casual": "sophisticated yet relaxed outfit such as a elegant blouse with well-fitted pants or a chic dress with tasteful accessories",
    beachwear: "attractive swimwear or beach attire including a stylish bikini or one-piece swimsuit with beach cover-up or sarong",
    auto: "outfit automatically selected based on scene type"
};

// Quick templates
const QUICK_TEMPLATES = {
    "crypto-tutorial": {
        customDescription: "explaining the basics of blockchain technology while pointing to educational charts and diagrams",
        sceneType: "tutorial",
        tone: "educational",
        outfitStyle: "classy-casual",
        includeBackground: true,
        includeLighting: true,
        includeCamera: false
    },
    "beach-fun": {
        customDescription: "playing volleyball on the beach and laughing with friends during golden hour",
        sceneType: "beach",
        tone: "playful",
        outfitStyle: "beachwear",
        includeBackground: true,
        includeLighting: true,
        includeCamera: true
    },
    "dance-party": {
        customDescription: "dancing energetically to upbeat music with smooth, confident movements",
        sceneType: "dancing",
        tone: "playful",
        outfitStyle: "streetwear",
        includeBackground: true,
        includeLighting: true,
        includeCamera: true
    }
};

// Initialize prompt generator when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePromptGenerator();
});

function initializePromptGenerator() {
    setupFormHandlers();
    setupTemplateHandlers();
    setupHistoryHandlers();
    loadPromptHistory();
    setupToneStyles();
}

// Setup form event handlers
function setupFormHandlers() {
    const form = document.getElementById('promptForm');
    const copyPromptBtn = document.getElementById('copyPromptBtn');
    const copyTTSBtn = document.getElementById('copyTTSBtn');
    const exportHunyuanBtn = document.getElementById('exportHunyuanBtn');

    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    if (copyPromptBtn) {
        copyPromptBtn.addEventListener('click', () => {
            const promptText = document.getElementById('generatedPrompt').textContent;
            CryptoCassie.copyToClipboard(promptText, copyPromptBtn);
        });
    }

    if (copyTTSBtn) {
        copyTTSBtn.addEventListener('click', () => {
            const ttsText = document.getElementById('ttsPrompt').textContent;
            CryptoCassie.copyToClipboard(ttsText, copyTTSBtn);
        });
    }

    if (exportHunyuanBtn) {
        exportHunyuanBtn.addEventListener('click', handleHunyuanExport);
    }
}

// Setup template handlers
function setupTemplateHandlers() {
    const templateCards = document.querySelectorAll('.template-card');
    
    templateCards.forEach(card => {
        const button = card.querySelector('button');
        if (button) {
            button.addEventListener('click', () => {
                const templateId = card.getAttribute('data-template');
                applyTemplate(templateId);
            });
        }
    });
}

// Setup history handlers
function setupHistoryHandlers() {
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all prompt history?')) {
                clearPromptHistory();
            }
        });
    }
}

// Setup tone option styling
function setupToneStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .tone-option {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: var(--spacing-sm) var(--spacing-md);
            border: 2px solid #e1e5e9;
            border-radius: var(--radius-md);
            transition: all var(--transition-fast);
        }
        
        .tone-option:hover {
            border-color: var(--primary);
            background: rgba(255, 107, 157, 0.1);
        }
        
        .tone-option input[type="radio"] {
            display: none;
        }
        
        .tone-option input[type="radio"]:checked + .tone-label {
            color: var(--primary);
            font-weight: 600;
        }
        
        .tone-option:has(input[type="radio"]:checked) {
            border-color: var(--primary);
            background: rgba(255, 107, 157, 0.1);
        }
        
        .tone-label {
            margin-left: 0;
            transition: color var(--transition-fast);
        }
    `;
    document.head.appendChild(style);
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = getFormData();
    const generatedPrompt = generatePrompt(formData);
    const ttsPrompt = generateTTSPrompt(formData);
    
    // Display generated prompts
    document.getElementById('generatedPrompt').textContent = generatedPrompt;
    document.getElementById('ttsPrompt').textContent = ttsPrompt;
    
    // Save to history
    savePromptToHistory({
        prompt: generatedPrompt,
        tts: ttsPrompt,
        formData: formData,
        timestamp: new Date().toISOString()
    });
    
    // Update history display
    loadPromptHistory();
}

// Get form data
function getFormData() {
    return {
        customDescription: document.getElementById('customDescription').value.trim(),
        sceneType: document.getElementById('sceneType').value,
        tone: document.querySelector('input[name="tone"]:checked').value,
        outfitStyle: document.getElementById('outfitStyle').value,
        includeBackground: document.getElementById('includeBackground').checked,
        includeLighting: document.getElementById('includeLighting').checked,
        includeCamera: document.getElementById('includeCamera').checked
    };
}

// Generate main prompt
function generatePrompt(formData) {
    let prompt = CHARACTER_BASE;
    
    // Add scene description
    if (formData.customDescription) {
        prompt += ` Cassie is ${formData.customDescription}.`;
    }
    
    // Add scene configuration
    const sceneConfig = SCENE_CONFIGS[formData.sceneType];
    if (sceneConfig) {
        prompt += ` The scene takes place in a ${sceneConfig.setting}.`;
        
        // Add outfit
        let outfitStyle = formData.outfitStyle;
        if (outfitStyle === 'auto') {
            outfitStyle = sceneConfig.outfit;
        }
        
        if (OUTFIT_STYLES[outfitStyle]) {
            prompt += ` She is wearing ${OUTFIT_STYLES[outfitStyle]}.`;
        }
        
        // Add tone and mood
        const toneConfig = TONE_CONFIGS[formData.tone];
        if (toneConfig) {
            prompt += ` Her demeanor shows a ${toneConfig} combined with ${sceneConfig.mood}.`;
        }
        
        // Add background details
        if (formData.includeBackground && sceneConfig.background) {
            prompt += ` The background features ${sceneConfig.background}.`;
        }
        
        // Add lighting details
        if (formData.includeLighting) {
            prompt += ` The lighting is professional and flattering, enhancing the overall mood of the scene.`;
        }
        
        // Add camera suggestions
        if (formData.includeCamera) {
            prompt += ` Camera angle: Medium shot to full body shot, capturing Cassie's natural charisma and the scene environment.`;
        }
    }
    
    // Add consistency reminder
    prompt += " Maintain Cassie's consistent appearance and personality as defined in her character profile.";
    
    return prompt;
}

// Generate TTS-optimized prompt
function generateTTSPrompt(formData) {
    let ttsPrompt = "Crypto Cassie, a beautiful young Black American woman with green eyes and wavy hair.";
    
    if (formData.customDescription) {
        ttsPrompt += ` She is ${formData.customDescription}.`;
    }
    
    const sceneConfig = SCENE_CONFIGS[formData.sceneType];
    if (sceneConfig) {
        ttsPrompt += ` The setting is ${sceneConfig.setting}.`;
        
        const toneConfig = TONE_CONFIGS[formData.tone];
        if (toneConfig) {
            ttsPrompt += ` Her voice and manner are ${toneConfig}.`;
        }
    }
    
    return ttsPrompt;
}

// Apply template
function applyTemplate(templateId) {
    const template = QUICK_TEMPLATES[templateId];
    if (!template) return;
    
    // Fill form fields
    document.getElementById('customDescription').value = template.customDescription;
    document.getElementById('sceneType').value = template.sceneType;
    document.querySelector(`input[name="tone"][value="${template.tone}"]`).checked = true;
    document.getElementById('outfitStyle').value = template.outfitStyle;
    document.getElementById('includeBackground').checked = template.includeBackground;
    document.getElementById('includeLighting').checked = template.includeLighting;
    document.getElementById('includeCamera').checked = template.includeCamera;
    
    // Auto-generate prompt
    const formData = getFormData();
    const generatedPrompt = generatePrompt(formData);
    const ttsPrompt = generateTTSPrompt(formData);
    
    document.getElementById('generatedPrompt').textContent = generatedPrompt;
    document.getElementById('ttsPrompt').textContent = ttsPrompt;
}

// Save prompt to history
function savePromptToHistory(promptData) {
    let history = CryptoCassie.loadFromLocalStorage('promptHistory', []);
    
    // Add new prompt to beginning of array
    history.unshift(promptData);
    
    // Keep only last 5 prompts
    history = history.slice(0, 5);
    
    CryptoCassie.saveToLocalStorage('promptHistory', history);
}

// Load and display prompt history
function loadPromptHistory() {
    const history = CryptoCassie.loadFromLocalStorage('promptHistory', []);
    const historyContainer = document.getElementById('promptHistory');
    
    if (!historyContainer) return;
    
    if (history.length === 0) {
        historyContainer.innerHTML = '<p class="text-center" style="color: var(--text-light);">No recent prompts. Generate your first prompt above!</p>';
        return;
    }
    
    historyContainer.innerHTML = history.map((item, index) => `
        <div class="card history-item">
            <div class="flex-between mb-md">
                <h4>Prompt #${history.length - index}</h4>
                <span style="color: var(--text-light); font-size: 0.9rem;">${CryptoCassie.formatDate(new Date(item.timestamp))}</span>
            </div>
            <div class="history-details mb-md">
                <span class="badge">${item.formData.sceneType}</span>
                <span class="badge">${item.formData.tone}</span>
                <span class="badge">${item.formData.outfitStyle}</span>
            </div>
            <div class="code-block" style="margin-bottom: var(--spacing-md);">
                <code style="font-size: 0.85rem;">${item.prompt}</code>
            </div>
            <div class="flex" style="gap: var(--spacing-sm);">
                <button onclick="copyHistoryPrompt(${index})" class="btn btn-secondary" style="font-size: 0.8rem; padding: var(--spacing-sm) var(--spacing-md);">📋 Copy</button>
                <button onclick="reloadHistoryPrompt(${index})" class="btn btn-primary" style="font-size: 0.8rem; padding: var(--spacing-sm) var(--spacing-md);">🔄 Reload</button>
            </div>
        </div>
    `).join('');
    
    // Add badge styles
    if (!document.getElementById('badgeStyles')) {
        const style = document.createElement('style');
        style.id = 'badgeStyles';
        style.textContent = `
            .badge {
                display: inline-block;
                padding: var(--spacing-xs) var(--spacing-sm);
                background: var(--primary);
                color: var(--white);
                border-radius: var(--radius-sm);
                font-size: 0.75rem;
                font-weight: 500;
                margin-right: var(--spacing-xs);
            }
            .history-details {
                margin-bottom: var(--spacing-md);
            }
        `;
        document.head.appendChild(style);
    }
}

// Copy history prompt
function copyHistoryPrompt(index) {
    const history = CryptoCassie.loadFromLocalStorage('promptHistory', []);
    if (history[index]) {
        CryptoCassie.copyToClipboard(history[index].prompt);
    }
}

// Reload history prompt
function reloadHistoryPrompt(index) {
    const history = CryptoCassie.loadFromLocalStorage('promptHistory', []);
    if (history[index]) {
        const formData = history[index].formData;
        
        // Fill form with historical data
        document.getElementById('customDescription').value = formData.customDescription || '';
        document.getElementById('sceneType').value = formData.sceneType || 'tutorial';
        document.querySelector(`input[name="tone"][value="${formData.tone || 'friendly'}"]`).checked = true;
        document.getElementById('outfitStyle').value = formData.outfitStyle || 'auto';
        document.getElementById('includeBackground').checked = formData.includeBackground || false;
        document.getElementById('includeLighting').checked = formData.includeLighting || false;
        document.getElementById('includeCamera').checked = formData.includeCamera || false;
        
        // Update displayed prompts
        document.getElementById('generatedPrompt').textContent = history[index].prompt;
        document.getElementById('ttsPrompt').textContent = history[index].tts;
    }
}

// Clear prompt history
function clearPromptHistory() {
    CryptoCassie.saveToLocalStorage('promptHistory', []);
    loadPromptHistory();
}

// Handle HunyuanVideo export
function handleHunyuanExport() {
    const promptText = document.getElementById('generatedPrompt').textContent;
    
    if (!promptText || promptText.includes('Click "Generate Prompt"')) {
        alert('Please generate a prompt first before exporting.');
        return;
    }
    
    // Store prompt for download
    window.currentPromptForExport = promptText;
    
    // Show modal
    CryptoCassie.showModal('hunyuanModal');
    
    // Setup download button
    const downloadBtn = document.getElementById('downloadPromptBtn');
    if (downloadBtn) {
        downloadBtn.onclick = () => {
            const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
            const filename = `crypto-cassie-prompt-${timestamp}.txt`;
            CryptoCassie.downloadFile(window.currentPromptForExport, filename, 'text/plain');
        };
    }
}

// Export functions for global access
window.copyHistoryPrompt = copyHistoryPrompt;
window.reloadHistoryPrompt = reloadHistoryPrompt;

