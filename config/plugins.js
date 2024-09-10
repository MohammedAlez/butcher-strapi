module.exports = ({ env }) => ({
    upload: {
        config: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
            upload: {},
            delete: {},
        },
        },
    },
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.example.com'),
                port: env('SMTP_PORT', 587),
                auth: {
                    user: env('SMTP_USERNAME'),
                    pass: env('SMTP_PASSWORD'),
                },
                // secure: false,
                tls: {
                    rejectUnauthorized: false, // Add this line to allow self-signed certificates
                },
            },
            settings: {
            defaultFrom: 'orders@select-beef.com',
            defaultReplyTo: 'orders@select-beef.com',
            },
        },
    },
    // email: {
    //     config: {
    //         provider: 'nodemailer',
    //         providerOptions: {
    //             host: 'localhost',
    //             port: 1025,
    //             ignoreTLS: true,
    //         },
    //     },
    // },
    'strapi-blurhash-plugin': {
        enabled: true,
        config: {
            regenerateOnUpdate: true
        }
    },
});