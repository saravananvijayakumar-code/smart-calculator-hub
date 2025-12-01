-- Add user_id column to pageviews table if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'pageviews' AND column_name = 'user_id'
    ) THEN
        ALTER TABLE pageviews ADD COLUMN user_id BIGINT REFERENCES users(id) ON DELETE SET NULL;
    END IF;
END $$;

-- Add any other missing columns
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'pageviews' AND column_name = 'country'
    ) THEN
        ALTER TABLE pageviews ADD COLUMN country TEXT;
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'pageviews' AND column_name = 'city'
    ) THEN
        ALTER TABLE pageviews ADD COLUMN city TEXT;
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'pageviews' AND column_name = 'ip_address'
    ) THEN
        ALTER TABLE pageviews ADD COLUMN ip_address TEXT;
    END IF;
END $$;
